import LOCATION_CONSTANTS from './location.constants';
import {
  getCurrentPosition,
  getLocationByLatLong,
  getLocationByPlaceID,
} from '../../services/geocode';
import { fetchAndSetWeather, setFetchError } from '../weather/weather.actions';

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
  getLocationByLatLong(coords)
    .then((location) => {
      dispatch(setLocation(location));
    });
};

export const setCoordsAndFetchLocation = coords => (dispatch) => {
  dispatch(setCoords(coords));
  dispatch(fetchAndSetLocation());
  dispatch(fetchAndSetWeather());
};

export const setLocationAndFetchWeather = location => (dispatch) => {
  dispatch(setLocation(location));
  dispatch(fetchAndSetWeather());
};

export const lookupLocationAndFetchWeather = (placeID, sessionToken) => (dispatch) => {
  getLocationByPlaceID(placeID, sessionToken)
    .then((location) => {
      dispatch(setLocation(location));
      dispatch(setCoords({
        latitude: location.geometry.location.lat,
        longitude: location.geometry.location.lng,
      }));
      dispatch(fetchAndSetWeather());
    });
};

export const fetchAndSetUserCoords = () => (dispatch) => {
  getCurrentPosition()
    .then(({ coords }) => {
      dispatch(setCoords({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }));
    })
    .catch(() => {
      dispatch(setFetchError('geolocationOff'));
    })
    .finally(() => {
      dispatch(fetchAndSetWeather());
      dispatch(fetchAndSetLocation());
    });
};
