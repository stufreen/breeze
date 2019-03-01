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

const getImage = (iconKey) => {
  switch (iconKey) {
    case 'clear-day':
      return { default: clearDayWine, electric: clearDayElectric };
    case 'clear-night':
      return { default: clearNightWine, electric: clearNightElectric };
    case 'wind':
      return { default: windWine, electric: windElectric };
    case 'rain':
      return { default: rainWine, electric: rainElectric };
    case 'sleet':
    case 'snow':
      return { default: snowWine, electric: snowElectric };
    case 'fog':
      return { default: fogWine, electric: fogElectric };
    case 'cloudy':
      return { default: cloudyWine, electric: cloudyElectric };
    case 'partly-cloudy-day':
      return { default: partlyCloudyDayWine, electric: partlyCloudyDayElectric };
    case 'partly-cloudy-night':
      return { default: partlyCloudyNightWine, electric: partlyCloudyNightElectric };
    default:
      return { default: cloudyWine, electric: cloudyElectric };
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
            bottom: 0,
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
