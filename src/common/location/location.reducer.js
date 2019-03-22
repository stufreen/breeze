import LOCATION_CONSTANTS from './location.constants';

export const initialState = {
  coords: null,
  location: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCATION_CONSTANTS.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case LOCATION_CONSTANTS.SET_COORDS:
      return {
        ...state,
        coords: action.payload,
      };
    default:
      return state;
  }
}
