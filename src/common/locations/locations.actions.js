import LOCATIONS_CONSTANTS from './locations.constants';

export const setCoords = coords => ({
  type: LOCATIONS_CONSTANTS.SET_COORDS,
  payload: coords,
});

export const setLocation = location => ({
  type: LOCATIONS_CONSTANTS.SET_LOCATION,
  payload: location,
});

export const setWeather = weather => ({
  type: LOCATIONS_CONSTANTS.SET_WEATHER,
  payload: weather,
});

export const setFetchingWeather = isFetchingWeather => ({
  type: LOCATIONS_CONSTANTS.SET_FETCHING_WEATHER,
  payload: isFetchingWeather,
});

export const setFetchError = errKey => ({
  type: LOCATIONS_CONSTANTS.SET_FETCH_ERROR,
  payload: errKey,
});

export const setIsCurrentLocation = isCurrentLocation => ({
  type: LOCATIONS_CONSTANTS.SET_IS_CURRENT_LOCATION,
  payload: isCurrentLocation,
});
