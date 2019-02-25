import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

const clearImage = require('../assets/clear-wine.jpg');
const rainImage = require('../assets/rain-wine.jpg');
const snowImage = require('../assets/snow-wine.jpg');
const cloudyImage = require('../assets/cloudy-wine.jpg');

const getImage = (iconKey) => {
  switch (iconKey) {
    case 'clear-day':
    case 'clear-night':
    case 'wind':
      return clearImage;
    case 'rain':
    case 'sleet':
      return rainImage;
    case 'snow':
      return snowImage;
    case 'fog':
    case 'cloudy':
    case 'partly-cloudy-day':
    case 'partly-cloudy-night':
    default:
      return cloudyImage;
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
        <Animated.Image
          source={getImage(iconKey)}
          style={{
            position: 'absolute',
            top: 0,
            left: -1,
            right: 0,
            bottom: 0,
            resizeMode: 'cover',
            opacity: bgOpacity,
          }}
        />
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
