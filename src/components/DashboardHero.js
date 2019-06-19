import React from 'react';
import PropTypes from 'prop-types';
import BigTemp from './BigTemp';
import LastUpdated from './LastUpdated';
import LocationAddress from './LocationAddress';
import { Box, Script, LScript } from './design-system';
import { formatTemp } from '../services/weather';
import bp from '../services/breakpoints';

const DashboardHero = ({ location, opacity }) => (
  <Box mx={bp([3, 4])} py={bp([5, 6])} opacity={opacity}>
    {location.location && location.weather
      && (
        <Box alignItems="center" justifyContent="center">
          <LocationAddress location={location} />
          <BigTemp
            temp={formatTemp(location.weather.currently.temperature)}
            units={location.weather.flags.units}
          />
          <Script fontSize={4} mb={2} color="primary" header textAlign="center">{location.weather.currently.summary}</Script>
          <LScript
            color="primary"
            header
            textKey="dashboard:feelsLike"
            fontSize={1}
            interpolation={{ temp: formatTemp(location.weather.currently.apparentTemperature) }}
          />
          <LastUpdated
            timestamp={location.weather.currently.time * 1000}
            timezone={location.weather.timezone}
          />
        </Box>
      )
    }
  </Box>
);

DashboardHero.defaultProps = {
  location: null,
};

DashboardHero.propTypes = {
  location: PropTypes.shape({
    location: PropTypes.shape({
      address: PropTypes.object,
    }),
    weather: PropTypes.shape({
      currently: PropTypes.object,
    }),
  }),
  opacity: PropTypes.number.isRequired,
};

export default DashboardHero;
