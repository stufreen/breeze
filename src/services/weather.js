import { DARK_SKY_SECRET_KEY } from 'react-native-dotenv';
// import samplePayload from './sample-payload.json';

export const getWeather = ({ latitude, longitude }, units = 'auto', location = {}) => {
  // if (__DEV__) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(samplePayload);
  //     }, 5000);
  //   });
  // }

  // Country code of 'ca' is returning incorrect weather. Use 'si' instead
  let safeUnits = units;
  if (units === 'auto' && location && location.countryCode === 'CA') {
    safeUnits = 'si';
  }

  const url = `https://api.darksky.net/forecast/${DARK_SKY_SECRET_KEY}/${latitude},${longitude}?units=${safeUnits}&exclude=minutely`;
  return fetch(url, { cache: 'no-store' })
    .then(response => response.json());
};

export const formatTemp = rawTemp => Math.round(rawTemp);

export const getTempUnit = units => (units === 'us' ? 'F' : 'C');
