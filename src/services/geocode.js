import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { GOOGLE_MAPS_API_KEY } from 'react-native-dotenv';

const geolocate = (args = {}) => new Promise((resolve, reject) => {
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

export const getCountryFromLocation = (location) => {
  const countryComponents = location.address_components.filter(
    addressComponent => addressComponent.types.includes('country'),
  );
  return countryComponents.length === 0 ? undefined : countryComponents[0].short_name;
};

const preferLocality = (a, b) => {
  if (a.types.includes('locality') && !b.types.includes('locality')) {
    return -1;
  }
  return 1;
};

export const getCurrentPosition = (args) => {
  if (Platform.OS === 'android') {
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Breeze Geolocation',
        message:
          'Breeze Weather would like to use your current' +
          'location to get local weather information.',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    ).then(() => geolocate(args));
  }
  return geolocate(args);
};

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

export const getLocationByPlaceID = (googlePlaceID, sessionToken) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${googlePlaceID}&key=${GOOGLE_MAPS_API_KEY}&sessiontoken=${sessionToken}`;
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'OK') {
        return data.result;
      }
      console.warn(data);
      return null;
    });
};

export const getLocationByLatLong = ({ latitude, longitude }) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=locality|political|colloquial_area|park&key=${GOOGLE_MAPS_API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'OK') {
        return data.results.sort(preferLocality)[0];
      }
      if (data.status === 'ZERO_RESULTS') {
        return null;
      }
      console.warn(data);
      return null;
    });
};
