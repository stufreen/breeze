import SETTINGS_CONSTANTS from './settings.constants';

const initialState = {
  units: 'auto',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SETTINGS_CONSTANTS.SET_UNITS:
      return {
        ...state,
        units: action.payload,
      };
    default:
      return state;
  }
}
