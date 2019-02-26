import { AppState } from 'react-native';

let appState = 'init';

export const handleStateChange = (nextState, callback) => {
  if (appState === 'inactive' || appState === 'background') {
    callback();
  }
  appState = nextState;
};

export const listenForActiveState = (callback) => {
  AppState.addEventListener('change', (nextState) => {
    handleStateChange(nextState, callback);
  });
};
