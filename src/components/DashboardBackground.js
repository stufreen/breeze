import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import ThemedImage from './ThemedImage';

const clearDayWine = require('../assets/backgrounds/wine/clear-day-wine.jpg');
const clearNightWine = require('../assets/backgrounds/wine/clear-night-wine.jpg');
const partlyCloudyDayWine = require('../assets/backgrounds/wine/partly-cloudy-day-wine.jpg');
const partlyCloudyNightWine = require('../assets/backgrounds/wine/partly-cloudy-night-wine.jpg');
const rainWine = require('../assets/backgrounds/wine/rain-wine.jpg');
const snowWine = require('../assets/backgrounds/wine/snow-wine.jpg');
const cloudyWine = require('../assets/backgrounds/wine/cloudy-wine.jpg');
const fogWine = require('../assets/backgrounds/wine/fog-wine.jpg');
const windWine = require('../assets/backgrounds/wine/wind-wine.jpg');

const clearDayElectric = require('../assets/backgrounds/electric/clear-day-electric.jpg');
const clearNightElectric = require('../assets/backgrounds/electric/clear-night-electric.jpg');
const partlyCloudyDayElectric = require('../assets/backgrounds/electric/partly-cloudy-day-electric.jpg');
const partlyCloudyNightElectric = require('../assets/backgrounds/electric/partly-cloudy-night-electric.jpg');
const rainElectric = require('../assets/backgrounds/electric/rain-electric.jpg');
const snowElectric = require('../assets/backgrounds/electric/snow-electric.jpg');
const cloudyElectric = require('../assets/backgrounds/electric/cloudy-electric.jpg');
const fogElectric = require('../assets/backgrounds/electric/fog-electric.jpg');
const windElectric = require('../assets/backgrounds/electric/wind-electric.jpg');

const clearDaySplash = require('../assets/backgrounds/splash/clear-day-splash.jpg');
const clearNightSplash = require('../assets/backgrounds/splash/clear-night-splash.jpg');
const partlyCloudyDaySplash = require('../assets/backgrounds/splash/partly-cloudy-day-splash.jpg');
const partlyCloudyNightSplash = require('../assets/backgrounds/splash/partly-cloudy-night-splash.jpg');
const rainSplash = require('../assets/backgrounds/splash/rain-splash.jpg');
const snowSplash = require('../assets/backgrounds/splash/snow-splash.jpg');
const cloudySplash = require('../assets/backgrounds/splash/cloudy-splash.jpg');
const fogSplash = require('../assets/backgrounds/splash/fog-splash.jpg');
const windSplash = require('../assets/backgrounds/splash/wind-splash.jpg');

const getImage = (iconKey) => {
  switch (iconKey) {
    case 'clear-day':
      return {
        default: clearDayWine,
        electric: clearDayElectric,
        splash: clearDaySplash,
      };
    case 'clear-night':
      return {
        default: clearNightWine,
        electric: clearNightElectric,
        splash: clearNightSplash,
      };
    case 'wind':
      return {
        default: windWine,
        electric: windElectric,
        splash: windSplash,
      };
    case 'rain':
      return {
        default: rainWine,
        electric: rainElectric,
        splash: rainSplash,
      };
    case 'sleet':
    case 'snow':
      return {
        default: snowWine,
        electric: snowElectric,
        splash: snowSplash,
      };
    case 'fog':
      return {
        default: fogWine,
        electric: fogElectric,
        splash: fogSplash,
      };
    case 'cloudy':
      return {
        default: cloudyWine,
        electric: cloudyElectric,
        splash: cloudySplash,
      };
    case 'partly-cloudy-day':
      return {
        default: partlyCloudyDayWine,
        electric: partlyCloudyDayElectric,
        splash: partlyCloudyDaySplash,
      };
    case 'partly-cloudy-night':
      return {
        default: partlyCloudyNightWine,
        electric: partlyCloudyNightElectric,
        splash: partlyCloudyNightSplash,
      };
    default:
      return {
        default: cloudyWine,
        electric: cloudyElectric,
        splash: cloudySplash,
      };
  }
};

class DashboardBackground extends React.Component {
  constructor() {
    super();
    this.state = {
      bgOpacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.bgOpacity,
      {
        toValue: 1,
        duration: 5000,
      },
    ).start();
  }

  render() {
    const { iconKey } = this.props;
    const { bgOpacity } = this.state;
    return iconKey
      ? (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: -1,
            right: 0,
            bottom: -1,
            resizeMode: 'cover',
            opacity: bgOpacity,
          }}
        >
          {}
          <ThemedImage
            sources={getImage(iconKey)}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}
          />
        </Animated.View>
      )
      : null;
  }
}

DashboardBackground.defaultProps = {
  iconKey: null,
};

DashboardBackground.propTypes = {
  iconKey: PropTypes.string,
};

export default DashboardBackground;
