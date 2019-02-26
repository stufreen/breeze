import settingsReducer, { initialState } from './settings.reducer';
import { setUnits, setTheme } from './settings.actions';

test('it has an initial state', () => {
  expect(settingsReducer(undefined, { type: 'foo' })).toEqual(initialState);
});

test('it can set units', () => {
  expect(settingsReducer(initialState, setUnits('us'))).toEqual({
    ...initialState,
    units: 'us',
  });
});

test('it can set theme', () => {
  expect(settingsReducer(initialState, setTheme('electric'))).toEqual({
    ...initialState,
    theme: 'electric',
  });
});
