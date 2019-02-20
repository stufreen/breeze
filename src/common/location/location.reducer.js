import LOCATION_CONSTANTS from './location.constants';

const initialState = {
  coords: {
    longitude: -73.935242,
    latitude: 40.730610, // New York City
  },
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
