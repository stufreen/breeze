import {
  getCurrentPosition,
  getLocationByLatLong,
  getLocationByPlaceID,
  getCountryFromLocation,
} from '../../services/geocode';
import { getWeather } from '../../services/weather';
import {
  setFetchError,
  setLocation,
  setCoords,
  setWeather,
  setFetchingWeather,
  setIsCurrentLocation,
} from './locations.actions';

export const fetchAndSetWeather = () => (dispatch, getState) => {
  const { locations, settings } = getState();
  getWeather(locations[0].coords, settings.units, locations[0].location)
    .then((weather) => {
      dispatch(setWeather(weather));
    })
    .finally(() => {
      dispatch(setFetchingWeather(false));
    });
};

export const fetchAndSetLocation = () => (dispatch, getState) => {
  const { coords } = getState().locations[0];
  // Reverse geocode address from coords
  getLocationByLatLong(coords)
    .then((location) => {
      const countryCode = getCountryFromLocation(location);
      const locationPlus = {
        ...location,
        countryCode,
      };
      dispatch(setLocation(locationPlus));
    })
    .finally(() => {
      dispatch(fetchAndSetWeather());
    });
};

export const setCoordsAndFetchLocation = coords => (dispatch) => {
  dispatch(setCoords(coords));
  dispatch(fetchAndSetLocation());
};

export const setLocationAndFetchWeather = location => (dispatch) => {
  dispatch(setLocation(location));
  dispatch(fetchAndSetWeather());
};

export const lookupLocationAndFetchWeather = (placeID, sessionToken) => (dispatch) => {
  getLocationByPlaceID(placeID, sessionToken)
    .then((location) => {
      const countryCode = getCountryFromLocation(location);
      const locationPlus = {
        ...location,
        countryCode,
      };
      dispatch(setLocation(locationPlus));
      dispatch(setIsCurrentLocation(false));
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
      dispatch(setIsCurrentLocation(true));
    })
    .catch(() => {
      dispatch(setFetchError('geolocationOff'));
      const { locations } = getState();
      if (locations[0].coords === null) {
        dispatch(setCoords({
          longitude: -74.006058,
          latitude: 40.712772, // New York City
        }));
        dispatch(setIsCurrentLocation(false));
      }
    })
    .finally(() => {
      dispatch(fetchAndSetLocation());
    });
};

export const refreshWeather = () => (dispatch, getState) => {
  const { locations } = getState();
  if (locations[0].isCurrentLocation) {
    dispatch(setFetchingWeather(true));
    dispatch(fetchAndSetUserCoords());
  } else if (locations[0].coords) {
    dispatch(setFetchingWeather(true));
    dispatch(fetchAndSetWeather());
  }
};
