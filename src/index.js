import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import initializeNavigation from './scenes';

const store = createStore(rootReducer);

initializeNavigation(Provider, store);
