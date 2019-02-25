import { AppState } from 'react-native';

let appState = 'init';

function handleStateChange(nextState, callback) {
  if (appState === 'inactive' || appState === 'inactive') {
    callback();
  }
  appState = nextState;
}

export const listenForActiveState = (callback) => {
  AppState.addEventListener('change', (nextState) => {
    handleStateChange(nextState, callback);
  });
};
