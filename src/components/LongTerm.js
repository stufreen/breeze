import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Script } from './design-system';
import LongTermDay from './LongTermDay';

const LongTerm = ({ weather }) => (
  <Box mx={3} mb={4}>
    {weather && <Script fontSize={3} color="accent" header mb={3}>This Week</Script>}
    {weather && weather.daily.data.slice(1, 8).map(day => <LongTermDay day={day} timezone={weather.timezone} key={day.time} />)}
  </Box>
);

LongTerm.defaultProps = {
  weather: null,
};

LongTerm.propTypes = {
  weather: PropTypes.shape({
    daily: PropTypes.object,
  }),
};

const mapStateToProps = state => ({
  weather: state.weather.weather,
});

const ConnectedLongTerm = connect(mapStateToProps)(LongTerm);

export default ConnectedLongTerm;
