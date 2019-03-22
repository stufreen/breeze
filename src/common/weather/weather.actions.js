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

export const setFetchError = errKey => ({
  type: WEATHER_CONSTANTS.SET_FETCH_ERROR,
  payload: errKey,
});

export const fetchAndSetWeather = () => (dispatch, getState) => {
  const { location, settings } = getState();
  getWeather(location.coords, settings.units)
    .then((weather) => {
      dispatch(setWeather(weather));
    })
    .finally(() => {
      dispatch(setFetchingWeather(false));
    });
};

export const refreshWeather = () => (dispatch, getState) => {
  const { location } = getState();
  if (location.coords) {
    dispatch(setFetchingWeather(true));
    dispatch(fetchAndSetWeather());
  }
};
