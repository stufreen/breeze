import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import LocalizedText from '../LocalizedText';
import { farenheitToCelcius } from '../../services/weather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const DashboardHero = ({ location, weather, componentId }) => (
  <View style={styles.container}>
    <LocalizedText style={styles.welcome} textKey="currentWeather" />
    {location
      && <Text style={styles.instructions}>{location.address.city}</Text>
    }
    {weather
      && (
        <Text style={styles.instructions}>
          {weather.currently.summary}
          {Math.round(farenheitToCelcius(weather.currently.temperature))}
          &deg;C
        </Text>
      )
    }
    <Button
      title="Go to Settings"
      onPress={() => {
        Navigation.push(componentId, {
          component: {
            name: 'Settings',
          },
        });
      }}
    />
  </View>
);

const mapStateToProps = state => ({
  weather: state.weather.weather,
  location: state.weather.location,
});

const ConnectedDashboardHero = connect(mapStateToProps)(DashboardHero);

export default ConnectedDashboardHero;
