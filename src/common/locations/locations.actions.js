import LOCATIONS_CONSTANTS from './locations.constants';

export const setCoords = (coords, index) => ({
  type: LOCATIONS_CONSTANTS.SET_COORDS,
  payload: coords,
  index,
});

export const setLocation = (location, index) => ({
  type: LOCATIONS_CONSTANTS.SET_LOCATION,
  payload: location,
  index,
});

export const setWeather = (weather, index) => ({
  type: LOCATIONS_CONSTANTS.SET_WEATHER,
  payload: weather,
  index,
});

export const setFetchingWeather = (isFetchingWeather, index) => ({
  type: LOCATIONS_CONSTANTS.SET_FETCHING_WEATHER,
  payload: isFetchingWeather,
  index,
});

export const setFetchError = (errKey, index) => ({
  type: LOCATIONS_CONSTANTS.SET_FETCH_ERROR,
  payload: errKey,
  index,
});

export const setIsCurrentLocation = (isCurrentLocation, index) => ({
  type: LOCATIONS_CONSTANTS.SET_IS_CURRENT_LOCATION,
  payload: isCurrentLocation,
  index,
});

export const addLocation = () => ({
  type: LOCATIONS_CONSTANTS.ADD_LOCATION,
});

export const deleteLocation = index => ({
  type: LOCATIONS_CONSTANTS.DELETE_LOCATION,
  index,
});
