import locationsReducer, { initialState } from './locations.reducer';
import {
  setLocation,
  setCoords,
  setWeather,
  setFetchingWeather,
  setFetchError,
  setIsCurrentLocation,
} from './locations.actions';

test('it has an initial state', () => {
  expect(locationsReducer(undefined, { type: 'foo' })).toEqual(initialState);
});

test('it can set location', () => {
  expect(locationsReducer(initialState, setLocation('japan', 0))).toEqual([{
    ...initialState[0],
    location: 'japan',
  }]);
});

test('it can set coords', () => {
  expect(locationsReducer(initialState, setCoords('somewhere', 0))).toEqual([{
    ...initialState[0],
    coords: 'somewhere',
  }]);
});

test('it can set weather', () => {
  expect(locationsReducer(initialState, setWeather('raining', 0))).toEqual([{
    ...initialState[0],
    weather: 'raining',
  }]);
});

test('it can set fetching weather', () => {
  expect(locationsReducer(initialState, setFetchingWeather(true, 0))).toEqual([{
    ...initialState[0],
    isFetchingWeather: true,
  }]);
});

test('it can set a fetch error', () => {
  expect(locationsReducer(initialState, setFetchError('foobar', 0))).toEqual([{
    ...initialState[0],
    fetchError: 'foobar',
  }]);
});

test('it can set if the location is the current location', () => {
  expect(locationsReducer(initialState, setIsCurrentLocation(true))).toEqual([{
    ...initialState[0],
    isCurrentLocation: true,
  }]);
});
