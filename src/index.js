import { Provider } from 'react-redux';
import configureStore from './configureStore';
import initializeNavigation from './scenes';
import { refreshWeather, fetchAndSetUserCoords, addCurrentLocation } from './common/locations/locations.thunks';
import { getThemedProvider } from './theme';
import { initializeLocalization } from './services/localization';
import { listenForActiveState } from './services/app-state-watcher';

// Create redux store
const { store } = configureStore((store) => {
  // If weather or location is not set, probably first time use
  // Try to get user location and weather
  const { locations } = store.getState();
  if (!locations[0].weather || !locations[0].location) {
    store.dispatch(fetchAndSetUserCoords(0));
  } else {
    store.dispatch(refreshWeather(0));
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
  store.dispatch(refreshWeather(0));
  store.dispatch(addCurrentLocation());
});
