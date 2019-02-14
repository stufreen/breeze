import WEATHER_CONSTANTS from './weather.constants';
import { getCurrentPosition, getLocationName } from '../../services/geocode';
import { getWeather } from '../../services/weather';

export const setWeather = weather => ({
  type: WEATHER_CONSTANTS.SET_WEATHER,
  payload: weather,
});

export const setLocation = location => ({
  type: WEATHER_CONSTANTS.SET_LOCATION,
  payload: location,
});

export const fetchAndSetWeather = () => (dispatch) => {
  getCurrentPosition().then((position) => {
    // Get weather at coords
    getWeather(position.coords)
      .then((weather) => {
        dispatch(setWeather(weather));
      });
    // Reverse geocode address from coords
    getLocationName(position.coords)
      .then((location) => {
        dispatch(setLocation(location));
      });
  });
};
