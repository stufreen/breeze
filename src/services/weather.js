import { DARK_SKY_SECRET_KEY } from 'react-native-dotenv';
import samplePayload from './sample-payload.json';

export const getWeather = ({ latitude, longitude }) => {
  // if (__DEV__) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(samplePayload)
  //     }, 1000);
  //   });
  // }

  const url = `https://api.darksky.net/forecast/${DARK_SKY_SECRET_KEY}/${latitude},${longitude}`;
  return fetch(url)
    .then(response => response.json());
};

export const farenheitToCelcius = f => Math.round((f - 32) * 5 / 9);
