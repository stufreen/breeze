import { AppState } from 'react-native';

export const handleStateChange = callback => (nextState) => {
  if (nextState === 'active') {
    callback();
  }
};

export const listenForActiveState = (callback) => {
  AppState.addEventListener('change', handleStateChange(callback));
};

export const removeStateListener = (callback) => {
  AppState.removeEventListener('change', handleStateChange(callback));
};
