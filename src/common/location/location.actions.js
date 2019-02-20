import LOCATION_CONSTANTS from './location.constants';
import { getCurrentPosition, getLocationName } from '../../services/geocode';
import { fetchAndSetWeather } from '../weather/weather.actions';

export const setCoords = coords => ({
  type: LOCATION_CONSTANTS.SET_COORDS,
  payload: coords,
});

export const setLocation = location => ({
  type: LOCATION_CONSTANTS.SET_LOCATION,
  payload: location,
});

export const fetchAndSetLocation = () => (dispatch, getState) => {
  const { coords } = getState().location;
  // Reverse geocode address from coords
  getLocationName(coords)
    .then((location) => {
      dispatch(setLocation(location));
    });
};

export const setCoordsAndFetchLocation = coords => (dispatch) => {
  dispatch(setCoords(coords));
  dispatch(fetchAndSetLocation());
  dispatch(fetchAndSetWeather());
};

export const fetchAndSetUserCoords = () => (dispatch) => {
  getCurrentPosition()
    .then(({ coords }) => {
      dispatch(setCoords(coords));
    })
    .finally(() => {
      dispatch(fetchAndSetWeather());
      dispatch(fetchAndSetLocation());
    });
};
