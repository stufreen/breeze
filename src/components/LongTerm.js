import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, LScript } from './design-system';
import LongTermDay from './LongTermDay';

const LongTerm = ({ weather }) => (
  <Box mx={3} mb={4}>
    {weather && <LScript fontSize={3} color="accent" header mb={3} textKey="dashboard:thisWeek" /> }
    {weather
      && weather.daily.data.slice(1, 8).map(
        day => <LongTermDay day={day} timezone={weather.timezone} key={day.time} />,
      )
    }
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
