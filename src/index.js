import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import initializeNavigation from './scenes';
import { fetchAndSetLocation } from './common/location/location.actions';
import { fetchAndSetWeather } from './common/weather/weather.actions';
import { getThemedProvider } from './theme';

// Create redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

// Fetch current weather and location from APIs on app startup
store.dispatch(fetchAndSetLocation());
store.dispatch(fetchAndSetWeather());

// Wrap the Provider in styled-components theme provider
const ThemedProvider = getThemedProvider(Provider);

// Register scenes with react-native-navigation
initializeNavigation(ThemedProvider, store);
