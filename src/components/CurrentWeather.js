import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getCurrentPosition, getLocationName } from '../services/geocode';
import { getWeather, farenheitToCelcius } from '../services/weather';
import LocalizedText from './LocalizedText';

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

export default class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      weatherInfo: null,
      address: null,
    };
  }

  componentDidMount() {
    getCurrentPosition().then((position) => {
      // Get weather at coords
      getWeather(position.coords)
        .then((weather) => {
          this.setState({
            weatherInfo: weather,
          });
        });
      // Reverse geocode address from coords
      getLocationName(position.coords)
        .then((location) => {
          this.setState({
            address: location.address,
          });
        });
    });
  }

  render() {
    const { address, weatherInfo } = this.state;
    return (
      <View style={styles.container}>
        <LocalizedText style={styles.welcome} textKey="currentWeather" />
        {address
          && <Text style={styles.instructions}>{address.city}</Text>
        }
        {weatherInfo
          && (
            <Text style={styles.instructions}>
              {weatherInfo.currently.summary}
              {Math.round(farenheitToCelcius(weatherInfo.currently.temperature))}
              &deg;C
            </Text>
          )
        }
      </View>
    );
  }
}
