import { createStackNavigator, createAppContainer } from 'react-navigation';
import CurrentWeather from './scenes/CurrentWeather';
import Details from './scenes/Details';

const AppNavigator = createStackNavigator(
  {
    CurrentWeather,
    Details,
  },
  {
    initialRouteName: 'CurrentWeather',
  },
);

export default createAppContainer(AppNavigator);
