import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { withTheme } from 'styled-components/native';
import { Box, Script } from './design-system';
import Climacon from './Climacon';
import { farenheitToCelcius } from '../services/weather';

const LongTermDay = ({ day, timezone, theme }) => {
  const date = moment(day.time * 1000).tz(timezone);
  const pop = Math.round(day.precipProbability * 10) * 10;
  return (
    <Box
      mb="2px"
      flexDirection="row"
      bg="primaryTransparent"
      p={3}
      borderRadius={3}
      justifyContent="space-between"
      alignItems="center"
      flex={1}
    >
      <Box flex={1}>
        <Script header fontSize={2} color="accent" mb={1}>{date.format('dddd')}</Script>
        <Script fontSize={1}>{date.format('MMM D')}</Script>
      </Box>
      <Box flexDirection="row" alignItems="center" flex={1}>
        <Box flex={2} flexDirection="row" justifyContent="space-around">
          <Script header color="primary" mr={2} fontSize={2}>{farenheitToCelcius(day.temperatureHigh)}&deg;</Script>
          <Script header color="primary" mr={3} fontSize={2} opacity={0.7}>{farenheitToCelcius(day.temperatureLow)}&deg;</Script>
        </Box>
        <Box flex={1} alignItems="center" justifyContent="center">
          <Climacon iconKey={day.icon} size={36} color={theme.colors.accent} />
          {pop > 0 && <Script fontSize={0} opacity={0.8}>{pop}%</Script>}
        </Box>
      </Box>
    </Box>
  );
};

LongTermDay.propTypes = {
  day: PropTypes.shape({
    time: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temperatureHigh: PropTypes.number.isRequired,
    temperatureLow: PropTypes.number.isRequired,
  }).isRequired,
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

const mapStateToProps = state => ({
  weather: state.weather.weather,
});

const ConnectedLongTerm = connect(mapStateToProps)(LongTermDay);

export default withTheme(ConnectedLongTerm);
