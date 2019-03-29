import locationsReducer, { initialState } from './locations.reducer';
import {
  setLocation,
  setCoords,
  setWeather,
  setFetchingWeather,
  setFetchError,
} from './locations.actions';

jest.mock('../../services/geocode', () => ({
  getCurrentPosition: jest.fn(),
  getLocationByLatLong: jest.fn(),
  getLocationByPlaceID: jest.fn(),
}));

test('it has an initial state', () => {
  expect(locationsReducer(undefined, { type: 'foo' })).toEqual(initialState);
});

test('it can set location', () => {
  expect(locationsReducer(initialState, setLocation('japan'))).toEqual([{
    ...initialState[0],
    location: 'japan',
  }]);
});

test('it can set coords', () => {
  expect(locationsReducer(initialState, setCoords('somewhere'))).toEqual([{
    ...initialState[0],
    coords: 'somewhere',
  }]);
});

test('it can set weather', () => {
  expect(locationsReducer(initialState, setWeather('raining'))).toEqual([{
    ...initialState[0],
    weather: 'raining',
  }]);
});

test('it can set fetching weather', () => {
  expect(locationsReducer(initialState, setFetchingWeather(true))).toEqual([{
    ...initialState[0],
    isFetchingWeather: true,
  }]);
});

test('it can set a fetch error', () => {
  expect(locationsReducer(initialState, setFetchError('foobar'))).toEqual([{
    ...initialState[0],
    fetchError: 'foobar',
  }]);
});
