import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { farenheitToCelcius } from '../services/weather';
import BigTemp from './BigTemp';
import LastUpdated from './LastUpdated';
import Logo from './Logo';
import { Box, Script } from './design-system';

const DashboardHero = ({ location, weather }) => (
  <Box py={5} px={4}>
    {location && weather
      && (
        <Box alignItems="center" justifyContent="center">
          <Script fontSize={3} color="primary" header>{location.address.city}</Script>
          <BigTemp temp={farenheitToCelcius(weather.currently.temperature)} />
          <Script fontSize={4} color="primary" header>{weather.currently.summary}</Script>
          <LastUpdated timestamp={weather.currently.time * 1000} />
        </Box>
      )
    }
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
