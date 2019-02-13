/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import {
  DARK_SKY_SECRET_KEY,
  LOCATION_IQ_API_TOKEN,
} from 'react-native-dotenv'
import Geolocation from 'react-native-geolocation-service';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const farenheitToCelcius = (f) => (f - 32) * 5 / 9;

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      weatherInfo: null,
      address: null
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this._getWeather(position.coords);
        this._getLocationName(position.coords);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Current Weather</Text>
        {this.state.address &&
          <Text style={styles.instructions}>{this.state.address.city}</Text>
        }
        {this.state.weatherInfo &&
          <Text style={styles.instructions}>{this.state.weatherInfo.currently.summary} {Math.round(farenheitToCelcius(this.state.weatherInfo.currently.temperature))}&deg;C</Text>
        }
      </View>
    );
  }

  _getWeather = ({ latitude, longitude }) => {
    const url = `https://api.darksky.net/forecast/${DARK_SKY_SECRET_KEY}/${latitude},${longitude}`;
    fetch(url)
      .then(response => response.json())
      .then((myJson) => {
        this.setState({
          weatherInfo: myJson
        });
      });
  }

  _getLocationName = ({ latitude, longitude }) => {
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${LOCATION_IQ_API_TOKEN}&lat=${latitude}&lon=${longitude}&format=json`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then((myJson) => {
        console.log(myJson);
        this.setState({
          address: myJson.address
        });
      });
  }
}

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
