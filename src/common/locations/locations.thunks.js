import * as R from 'ramda';
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
  addLocation,
} from './locations.actions';

export const fetchAndSetWeather = index => (dispatch, getState) => {
  const { locations, settings } = getState();

  // Don't get weather if it has been less than 1 minute since the last check
  const ONE_MINUTE_MS = 1000 * 60;
  const now = Date.now();
  if (locations[index].weather
    && locations[index].weather.lastChecked + ONE_MINUTE_MS > now) {
    dispatch(setFetchingWeather(false, index));
    return;
  }

  getWeather(locations[index].coords, settings.units, locations[index].location)
    .then((weather) => {
      const weatherWithLastChecked = R.assoc('lastChecked', Date.now(), weather);
      dispatch(setWeather(weatherWithLastChecked, index));
    })
    .finally(() => {
      dispatch(setFetchingWeather(false, index));
    });
};

export const fetchAndSetLocation = index => (dispatch, getState) => {
  const { coords } = getState().locations[index];
  // Reverse geocode address from coords
  getLocationByLatLong(coords)
    .then((location) => {
      const countryCode = getCountryFromLocation(location);
      const locationPlus = {
        ...location,
        countryCode,
      };
      dispatch(setLocation(locationPlus, index));
    })
    .finally(() => {
      dispatch(fetchAndSetWeather(index));
    });
};

export const setCoordsAndFetchLocation = (coords, index) => (dispatch) => {
  dispatch(setCoords(coords, index));
  dispatch(fetchAndSetLocation(index));
};

export const setLocationAndFetchWeather = (location, index) => (dispatch) => {
  dispatch(setLocation(location, index));
  dispatch(fetchAndSetWeather(index));
};

export const lookupLocationAndFetchWeather = (placeID, sessionToken, index) => (dispatch) => {
  getLocationByPlaceID(placeID, sessionToken)
    .then((location) => {
      const countryCode = getCountryFromLocation(location);
      const locationPlus = {
        ...location,
        countryCode,
      };
      dispatch(setLocation(locationPlus, index));
      dispatch(setIsCurrentLocation(false, index));
      dispatch(setCoords({
        latitude: location.geometry.location.lat,
        longitude: location.geometry.location.lng,
      }, index));
      dispatch(fetchAndSetWeather(index));
    });
};

export const addLocationAndLookup = (placeID, sessionToken) => (dispatch, getState) => {
  dispatch(addLocation());
  const state = getState();
  const newLocationIndex = state.locations.length - 1;
  dispatch(lookupLocationAndFetchWeather(placeID, sessionToken, newLocationIndex));
};

export const fetchAndSetUserCoords = index => (dispatch, getState) => {
  getCurrentPosition()
    .then(({ coords }) => {
      dispatch(setCoords({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }, index));
      dispatch(setIsCurrentLocation(true, index));
    })
    .catch(() => {
      dispatch(setFetchError('geolocationOff', index));
      const { locations } = getState();
      if (locations[index].coords === null) {
        dispatch(setCoords({
          longitude: -74.006058,
          latitude: 40.712772, // New York City
        }, index));
      }
      dispatch(setIsCurrentLocation(false, index));
    })
    .finally(() => {
      dispatch(fetchAndSetLocation(index));
    });
};

export const refreshWeather = index => (dispatch, getState) => {
  const { locations } = getState();
  if (locations[index].isCurrentLocation) {
    dispatch(setFetchingWeather(true, index));
    dispatch(fetchAndSetUserCoords(index));
  } else if (locations[index].coords) {
    dispatch(setFetchingWeather(true, index));
    dispatch(fetchAndSetWeather(index));
  }
};

export const addCurrentLocation = () => (dispatch, getState) => {
  // Check if there is a current location already
  const { locations } = getState();
  const currentLocationIndex = R.find(location => location.isCurrentLocation)(locations);
  if (typeof currentLocationIndex !== 'undefined') {
    return;
  }

  getCurrentPosition()
    .then(({ coords }) => {
      // If getCurrentPosition was successful, we will add a current position location
      dispatch(addLocation());
      const state = getState();
      const newLocationIndex = state.locations.length - 1;
      dispatch(setCoords({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }, newLocationIndex));
      dispatch(setIsCurrentLocation(true, newLocationIndex));
      dispatch(fetchAndSetLocation(newLocationIndex));
    })
    .catch(() => {});
};
