import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import initializeNavigation from './scenes';
import { fetchAndSetUserCoords } from './common/location/location.actions';
import { getThemedProvider } from './theme';

// Create redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

// Fetch current weather and location from APIs on app startup
store.dispatch(fetchAndSetUserCoords());

// Wrap the Provider in styled-components theme provider
const ThemedProvider = getThemedProvider(Provider);

// Register scenes with react-native-navigation
initializeNavigation(ThemedProvider, store);
