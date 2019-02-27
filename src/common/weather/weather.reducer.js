import WEATHER_CONSTANTS from './weather.constants';

export const initialState = {
  weather: null,
  isFetchingWeather: false,
  fetchError: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
    case WEATHER_CONSTANTS.SET_FETCH_ERROR:
      return {
        ...state,
        fetchError: action.payload,
      };
    default:
      return state;
  }
}
