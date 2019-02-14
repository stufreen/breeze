import Geolocation from 'react-native-geolocation-service';
import { LOCATION_IQ_API_TOKEN } from 'react-native-dotenv';

export const getCurrentPosition = (args = {}) => new Promise((resolve, reject) => {
  Geolocation.getCurrentPosition(
    resolve,
    reject,
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
      ...args,
    },
  );
});

export const getLocationName = ({ latitude, longitude }) => {
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${LOCATION_IQ_API_TOKEN}&lat=${latitude}&lon=${longitude}&format=json`;
  return fetch(url)
    .then(response => response.json());
};
