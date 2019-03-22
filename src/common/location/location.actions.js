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

export const fetchAndSetUserCoords = () => (dispatch, getState) => {
  getCurrentPosition()
    .then(({ coords }) => {
      dispatch(setCoords({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }));
    })
    .catch(() => {
      dispatch(setFetchError('geolocationOff'));
      const { location } = getState();
      if (location.coords === null) {
        dispatch(setCoords({
          longitude: -73.935242,
          latitude: 40.730610, // New York City
        }));
      }
    })
    .finally(() => {
      dispatch(fetchAndSetWeather());
      dispatch(fetchAndSetLocation());
    });
};
