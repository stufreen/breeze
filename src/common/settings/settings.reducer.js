import SETTINGS_CONSTANTS from './settings.constants';

export const initialState = {
  units: 'auto',
  theme: 'wine',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SETTINGS_CONSTANTS.SET_UNITS:
      return {
        ...state,
        units: action.payload,
      };
    case SETTINGS_CONSTANTS.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
