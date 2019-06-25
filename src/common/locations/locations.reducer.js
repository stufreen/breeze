import * as R from 'ramda';
import uuid from 'uuid/v4';
import LOCATIONS_CONSTANTS from './locations.constants';

export const initialState = [{
  id: uuid(),
  coords: null,
  location: null,
  isCurrentLocation: false,
  weather: null,
  isFetchingWeather: false,
  fetchError: null,
}];

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCATIONS_CONSTANTS.SET_LOCATION:
      return R.update(
        action.index,
        {
          ...state[action.index],
          location: action.payload,
        },
        state,
      );
    case LOCATIONS_CONSTANTS.SET_COORDS:
      return R.update(
        action.index,
        {
          ...state[action.index],
          coords: action.payload,
        },
        state,
      );
    case LOCATIONS_CONSTANTS.SET_WEATHER:
      return R.update(
        action.index,
        {
          ...state[action.index],
          weather: action.payload,
        },
        state,
      );
    case LOCATIONS_CONSTANTS.SET_FETCHING_WEATHER:
      return R.update(
        action.index,
        {
          ...state[action.index],
          isFetchingWeather: action.payload,
        },
        state,
      );
    case LOCATIONS_CONSTANTS.SET_FETCH_ERROR:
      return R.update(
        action.index,
        {
          ...state[action.index],
          fetchError: action.payload,
        },
        state,
      );
    case LOCATIONS_CONSTANTS.SET_IS_CURRENT_LOCATION:
      return R.update(
        action.index,
        {
          ...state[action.index],
          isCurrentLocation: action.payload,
        },
        state,
      );
    case LOCATIONS_CONSTANTS.ADD_LOCATION:
      return [
        ...state,
        {
          id: uuid(),
        },
      ];
    case LOCATIONS_CONSTANTS.DELETE_LOCATION:
      return R.remove(action.index, 1, state);
    case LOCATIONS_CONSTANTS.MOVE_LOCATION:
      return R.move(action.index, action.payload, state);
    default:
      return state;
  }
}
