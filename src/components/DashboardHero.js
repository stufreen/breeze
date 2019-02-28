import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BigTemp from './BigTemp';
import LastUpdated from './LastUpdated';
import { Box, Script, LScript } from './design-system';
import { formatTemp } from '../services/weather';
import bp from '../services/breakpoints';

const DashboardHero = ({ location, weather, scrollY }) => (
  <Box mx={bp([3, 4])} py={bp([5, 6])} flex={1} opacity={1 - (scrollY / bp([120, 300]))}>
    {location && weather
      && (
        <Box alignItems="center" justifyContent="center">
          <Script textAlign="center" fontSize={3} color="primary" header>{location.formatted_address}</Script>
          <BigTemp temp={formatTemp(weather.currently.temperature)} units={weather.flags.units} />
          <Script fontSize={4} mb={2} color="primary" header textAlign="center">{weather.currently.summary}</Script>
          <LScript
            color="primary"
            header
            textKey="dashboard:feelsLike"
            interpolation={{ temp: formatTemp(weather.currently.apparentTemperature) }}
          />
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
  scrollY: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  weather: state.weather.weather,
  location: state.location.location,
});

const ConnectedDashboardHero = connect(mapStateToProps)(DashboardHero);

export default ConnectedDashboardHero;
