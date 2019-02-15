import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Box, ScrollBox, Script } from './design-system';
import { farenheitToCelcius } from '../services/weather';

const Hourly = ({ weather }) => {
  const now = weather ? moment(weather.currently.time * 1000) : moment();
  const nowString = now.format('dddd, [Today]');
  const hoursToShow = weather
    ? weather.hourly.data.slice(0, 12)
    : [];
  return weather ? (
    <Box mb={5}>
      <Script mx={4} mb={3} fontWeight="bold" fontSize={3}>{nowString}</Script>
      <Script mx={4} mb={3}>{weather.hourly.summary}</Script>
      <ScrollBox
        horizontal
        contentContainerStyle={{ flexDirection: 'row', paddingLeft: 30, paddingRight: 30 }}
      >
        {
          hoursToShow.map(item => (
            <Box
              width={70}
              height={100}
              mx="1px"
              bg="rgba(255,255,255,0.1)"
              key={item.time}
              alignItems="center"
              justifyContent="center"
              borderRadius={3}
            >
              <Script fontSize={0}>{moment(item.time * 1000).format('h A')}</Script>
              <Script mt={1} fontSize={1} fontWeight="bold">
                {farenheitToCelcius(item.temperature)}
                &deg;C
              </Script>
            </Box>
          ))
        }
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
