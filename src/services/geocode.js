import Geolocation from 'react-native-geolocation-service';
import { LOCATION_IQ_API_TOKEN, GOOGLE_MAPS_API_KEY } from 'react-native-dotenv';

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

export const autoComplete = (searchString, sessionToken) => {
  const encodedSearchString = encodeURIComponent(searchString);
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodedSearchString}&types=(cities)&key=${GOOGLE_MAPS_API_KEY}&sessiontoken=${sessionToken}`;
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'OK') {
        return data.predictions;
      } 
      if (data.status === 'ZERO_RESULTS') {
        return [];
      }
      console.warn(data);
      return [];
    });
};

export const searchLocation = (searchString) => {
  // const url = `https://us1.locationiq.com/v1/search.php?key=${LOCATION_IQ_API_TOKEN}&q=${searchString}&format=json`;
  const encodedSearchString = encodeURIComponent(searchString);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedSearchString}&key=${GOOGLE_MAPS_API_KEY}`;
  return fetch(url)
    .then(response => response.json());
};

export const getLocationName = ({ latitude, longitude }) => {
  // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${LOCATION_IQ_API_TOKEN}&lat=${latitude}&lon=${longitude}&format=json`;
  return fetch(url)
    .then(response => response.json());
};
