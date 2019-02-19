import WEATHER_CONSTANTS from './weather.constants';

const initialState = {
  weather: null,
  location: null,
  isFetchingWeather: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case WEATHER_CONSTANTS.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case WEATHER_CONSTANTS.SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case WEATHER_CONSTANTS.SET_FETCHING_WEATHER:
      return {
        ...state,
        isFetchingWeather: action.payload,
      };
    default:
      return state;
  }
}
