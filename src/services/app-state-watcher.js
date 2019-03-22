import { AppState } from 'react-native';

let appState = 'init';

export const handleStateChange = (nextState, callback) => {
  if (appState === 'background' && nextState === 'active') {
    callback();
  }
  appState = nextState;
};

export const listenForActiveState = (callback) => {
  AppState.addEventListener('change', (nextState) => {
    handleStateChange(nextState, callback);
  });
};
