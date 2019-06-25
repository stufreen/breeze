import { AppState } from 'react-native';

// When the app goes from 'background' to 'active' the callback will be called
export const activeStateWatcher = (callback) => {
  let appState = 'init';

  const handleStateChange = callback => (nextState) => {
    if (nextState === 'active' && appState === 'background') {
      callback();
    }
    appState = nextState;
  };

  AppState.addEventListener('change', handleStateChange(callback));

  return {
    destroy: () => { AppState.removeEventListener('change', handleStateChange(callback)); },
  };
};
