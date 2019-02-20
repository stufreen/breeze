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
  const { coords } = getState().location;
  getWeather(coords)
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
