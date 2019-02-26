import { formatTemp, getTempUnit } from '../weather';

test('it formats a temperature by rounding it', () => {
  expect(formatTemp(1.1)).toEqual(1);
  expect(formatTemp(105.5555)).toEqual(106);
  expect(formatTemp(0)).toEqual(0);
  expect(formatTemp(-9.9)).toEqual(-10);
});

test('returns F if units is "us"', () => {
  expect(getTempUnit('us')).toEqual('F');
});

test('returns C if units is not "us"', () => {
  expect(getTempUnit('ca')).toEqual('C');
  expect(getTempUnit(undefined)).toEqual('C');
});
