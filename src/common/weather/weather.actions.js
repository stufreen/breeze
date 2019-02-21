import WEATHER_CONSTANTS from './weather.constants';
import { getWeather } from '../../services/weather';

export const setWeather = weather => ({
  type: WEATHER_CONSTANTS.SET_WEATHER,
  payload: weather,
});

export const setFetchingWeather = isFetchingWeather => ({
  type: WEATHER_CONSTANTS.SET_FETCHING_WEATHER,
  payload: isFetchingWeather,
});

export const fetchAndSetWeather = () => (dispatch, getState) => {
  const { location, settings } = getState();
  console.log(location);
  getWeather(location.coords, settings.units)
    .then((weather) => {
      dispatch(setWeather(weather));
    })
    .finally(() => {
      dispatch(setFetchingWeather(false));
    });
};

export const refreshWeather = () => (dispatch) => {
  dispatch(setFetchingWeather(true));
  dispatch(fetchAndSetWeather());
};
