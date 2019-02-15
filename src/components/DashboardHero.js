import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { farenheitToCelcius } from '../services/weather';
import BigTemp from './BigTemp';
import { Box, Script } from './design-system';

const DashboardHero = ({ location, weather }) => (
  <Box py={6} px={4}>
    <Box alignItems="center" justifyContent="center">
      {location
        && <Script fontSize={3} color="white">{location.address.city}</Script>
      }
      {weather
        && (
          <BigTemp temp={farenheitToCelcius(weather.currently.temperature)} />
        )
      }
      {weather
        && <Script fontSize={4}>{weather.currently.summary}</Script>
      }
    </Box>
  </Box>
);

DashboardHero.defaultProps = {
  location: null,
  weather: null,
};

DashboardHero.propTypes = {
  location: PropTypes.shape({
    address: PropTypes.object,
  }),
  weather: PropTypes.shape({
    currently: PropTypes.object,
  }),
};

const mapStateToProps = state => ({
  weather: state.weather.weather,
  location: state.weather.location,
});

const ConnectedDashboardHero = connect(mapStateToProps)(DashboardHero);

export default ConnectedDashboardHero;
