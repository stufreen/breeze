import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { Box, ScrollBox, Script } from './design-system';
import HourlyChart from './HourlyChart';
import bp from '../services/breakpoints';

const Hourly = ({ weather }) => {
  const now = weather ? moment(weather.currently.time * 1000).tz(weather.timezone) : moment();
  const nowString = now.format('dddd, [Today]');
  const hoursToShow = weather
    ? weather.hourly.data.slice(0, 18)
    : [];
  return weather ? (
    <Box mb={4}>
      <Script mx={bp([3, 4])} mb={3} fontWeight="bold" fontSize={3} header color="accent">{nowString}</Script>
      <Script mx={bp([3, 4])} mb={4} fontSize={1}>{weather.hourly.summary}</Script>
      <ScrollBox
        horizontal
        contentContainerStyle={{ flexDirection: 'row', paddingLeft: bp([16, 40]), paddingRight: bp([16, 40]) }}
      >
        <HourlyChart hours={hoursToShow} timezone={weather.timezone} />
      </ScrollBox>
    </Box>
  ) : null;
};

Hourly.defaultProps = {
  weather: null,
};

Hourly.propTypes = {
  weather: PropTypes.shape({
    hourly: PropTypes.object,
  }),
};

export default Hourly;
