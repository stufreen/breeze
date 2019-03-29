import LOCATIONS_CONSTANTS from './locations.constants';

export const initialState = [{
  coords: null,
  location: null,
  weather: null,
  isFetchingWeather: false,
  fetchError: null,
}];

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCATIONS_CONSTANTS.SET_LOCATION:
      return [{
        ...state[0],
        location: action.payload,
      }];
    case LOCATIONS_CONSTANTS.SET_COORDS:
      return [{
        ...state[0],
        coords: action.payload,
      }];
    case LOCATIONS_CONSTANTS.SET_WEATHER:
      return [{
        ...state[0],
        weather: action.payload,
      }];
    case LOCATIONS_CONSTANTS.SET_FETCHING_WEATHER:
      return [{
        ...state[0],
        isFetchingWeather: action.payload,
      }];
    case LOCATIONS_CONSTANTS.SET_FETCH_ERROR:
      return [{
        ...state[0],
        fetchError: action.payload,
      }];
    default:
      return state;
  }
}
