import { Navigation } from 'react-native-navigation';
import Dashboard from './scenes/Dashboard';
import Settings from './scenes/Settings';
import LocationSearch from './scenes/LocationSearch';

const getRegisterFunction = (Provider, store) => (screenId, component) => {
  Navigation.registerComponentWithRedux(
    screenId,
    () => component,
    Provider,
    store,
  );
};

export default (Provider, store) => {
  // Partial application of registerComponentWithRedux
  const register = getRegisterFunction(Provider, store);

  // Register scenes
  register('Dashboard', Dashboard);
  register('Settings', Settings);
  register('LocationSearch', LocationSearch);

  // Set first screen
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: 'Dashboard',
            },
          }],
        },
      },
    });
  });
};
