import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CurrentWeather from './components/CurrentWeather';
import { name as appName } from './app.json';
import rootReducer from './reducer';

const store = createStore(rootReducer);

const ConnectedApp = () => (
  <Provider store={store}>
    <CurrentWeather />
  </Provider>
);

AppRegistry.registerComponent(appName, () => (
  ConnectedApp
));
