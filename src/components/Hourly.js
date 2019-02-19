import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Box, ScrollBox, Script } from './design-system';
import HourlyChart from './HourlyChart';

const Hourly = ({ weather }) => {
  const now = weather ? moment(weather.currently.time * 1000) : moment();
  const nowString = now.format('dddd, [Today]');
  const hoursToShow = weather
    ? weather.hourly.data.slice(0, 12)
    : [];
  return weather ? (
    <Box mb={4}>
      <Script mx={4} mb={3} fontWeight="bold" fontSize={3} header>{nowString}</Script>
      <Script mx={4} mb={4}>{weather.hourly.summary}</Script>
      <ScrollBox
        horizontal
        contentContainerStyle={{ flexDirection: 'row', paddingLeft: 30, paddingRight: 30 }}
      >
        <HourlyChart hours={hoursToShow} />
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

const mapStateToProps = state => ({
  weather: state.weather.weather,
});

const ConnectedHourly = connect(mapStateToProps)(Hourly);

export default ConnectedHourly;
