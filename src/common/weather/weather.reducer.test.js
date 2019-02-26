import weatherReducer, { initialState } from './weather.reducer';
import { setWeather, setFetchingWeather } from './weather.actions';

test('it has an initial state', () => {
  expect(weatherReducer(undefined, { type: 'foo' })).toEqual(initialState);
});

test('it can set weather', () => {
  expect(weatherReducer(initialState, setWeather('raining'))).toEqual({
    ...initialState,
    weather: 'raining',
  });
});

test('it can set fetching weather', () => {
  expect(weatherReducer(initialState, setFetchingWeather(true))).toEqual({
    ...initialState,
    isFetchingWeather: true,
  });
});
