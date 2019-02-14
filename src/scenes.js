import { Navigation } from 'react-native-navigation';
import CurrentWeather from './scenes/CurrentWeather';
import Details from './scenes/Details';

export default (Provider, store) => {
  Navigation.registerComponentWithRedux(
    'navigation.playground.CurrentWeather',
    () => CurrentWeather,
    Provider,
    store,
  );
  Navigation.registerComponent(
    'navigation.playground.Details',
    () => Details,
  );

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: 'navigation.playground.CurrentWeather',
            },
          }],
        },
      },
    });
  });
};
