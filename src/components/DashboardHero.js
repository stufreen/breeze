import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { farenheitToCelcius } from '../services/weather';
import BigTemp from './BigTemp';
import LastUpdated from './LastUpdated';
import { Box, Script } from './design-system';

const DashboardHero = ({ location, weather }) => (
  <Box py={5} px={4}>
    {location && weather
      && (
        <Box alignItems="center" justifyContent="center">
          <Script fontSize={3} color="primary" header>{location.address.city}</Script>
          <BigTemp temp={farenheitToCelcius(weather.currently.temperature)} />
          <Script fontSize={4} mb={2} color="primary" header>{weather.currently.summary}</Script>
          <Script color="primary" header>Feels like {farenheitToCelcius(weather.currently.apparentTemperature)}&deg;</Script>
          <LastUpdated timestamp={weather.currently.time * 1000} timezone={weather.timezone} />
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
  location: state.location.location,
});

const ConnectedDashboardHero = connect(mapStateToProps)(DashboardHero);

export default ConnectedDashboardHero;
