import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import ThemedImage from './ThemedImage';

const clearImageWine = require('../assets/clear-wine.jpg');
const rainImageWine = require('../assets/rain-wine.jpg');
const snowImageWine = require('../assets/snow-wine.jpg');
const cloudyImageWine = require('../assets/cloudy-wine.jpg');

const clearImageElectric = require('../assets/clear-electric.jpg');
const rainImageElectric = require('../assets/rain-electric.jpg');
const snowImageElectric = require('../assets/snow-electric.jpg');
const cloudyImageElectric = require('../assets/cloudy-electric.jpg');

const getImage = (iconKey) => {
  switch (iconKey) {
    case 'clear-day':
    case 'clear-night':
    case 'wind':
      return (
        <ThemedImage
          sources={{ electric: clearImageElectric, default: clearImageWine }}
          resizeMode="cover"
        />
      );
    case 'rain':
    case 'sleet':
      return (
        <ThemedImage
          sources={{ electric: rainImageElectric, default: rainImageWine }}
          resizeMode="cover"
        />
      );
    case 'snow':
      return (
        <ThemedImage
          sources={{ electric: snowImageElectric, default: snowImageWine }}
          resizeMode="cover"
        />
      );
    case 'fog':
    case 'cloudy':
    case 'partly-cloudy-day':
    case 'partly-cloudy-night':
    default:
      return (
        <ThemedImage
          sources={{ electric: cloudyImageElectric, default: cloudyImageWine }}
          resizeMode="cover"
        />
      );
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
          {getImage(iconKey)}
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
