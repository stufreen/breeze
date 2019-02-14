import { DARK_SKY_SECRET_KEY } from 'react-native-dotenv';

export const getWeather = ({ latitude, longitude }) => {
  const url = `https://api.darksky.net/forecast/${DARK_SKY_SECRET_KEY}/${latitude},${longitude}`;
  return fetch(url)
    .then(response => response.json());
};

export const farenheitToCelcius = f => (f - 32) * 5 / 9;
