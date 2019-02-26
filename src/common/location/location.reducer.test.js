import locationReducer, { initialState } from './location.reducer';
import { setLocation, setCoords } from './location.actions';

jest.mock('../../services/geocode', () => ({
  getCurrentPosition: jest.fn(),
  getLocationByLatLong: jest.fn(),
  getLocationByPlaceID: jest.fn(),
}));

test('it has an initial state', () => {
  expect(locationReducer(undefined, { type: 'foo' })).toEqual(initialState);
});

test('it can set location', () => {
  expect(locationReducer(initialState, setLocation('japan'))).toEqual({
    ...initialState,
    location: 'japan',
  });
});

test('it can set coords', () => {
  expect(locationReducer(initialState, setCoords('somewhere'))).toEqual({
    ...initialState,
    coords: 'somewhere',
  });
});
