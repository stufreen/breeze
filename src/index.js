import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { name as appName } from './app.json';
import Navigator from './scenes';
import rootReducer from './reducer';

const store = createStore(rootReducer);

const ConnectedApp = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => (
  ConnectedApp
));
