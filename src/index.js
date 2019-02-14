import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import initializeNavigation from './scenes';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

initializeNavigation(Provider, store);
