import { Provider } from 'react-redux';
import configureStore from './configureStore';
import initializeNavigation from './scenes';
import { fetchAndSetUserCoords } from './common/location/location.actions';
import { refreshWeather } from './common/weather/weather.actions';
import { getThemedProvider } from './theme';
import { initializeLocalization } from './services/localization';
import { listenForActiveState } from './services/app-state-watcher';

// Create redux store
const { store } = configureStore((store) => {
  // If weather or location is not set, probably first time use
  // Try to get user location and weather
  const { weather, location } = store.getState();
  if (!weather.weather || !location.location) {
    store.dispatch(fetchAndSetUserCoords());
  } else {
    store.dispatch(refreshWeather());
  }
});

// Wrap the Provider in styled-components theme provider
const ThemedProvider = getThemedProvider(Provider);

initializeLocalization()
  .then(() => {
    // Register scenes with react-native-navigation
    initializeNavigation(ThemedProvider, store);
  });

listenForActiveState(() => {
  store.dispatch(refreshWeather());
});
