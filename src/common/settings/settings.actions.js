import SETTINGS_CONSTANTS from './settings.constants';

export const setUnits = unitKey => ({
  type: SETTINGS_CONSTANTS.SET_UNITS,
  payload: unitKey,
});

export const setTheme = unitKey => ({
  type: SETTINGS_CONSTANTS.SET_THEME,
  payload: unitKey,
});
