import React from 'react';
import PropTypes from 'prop-types';
import { Box, LScript } from './design-system';
import LongTermDay from './LongTermDay';
import bp from '../services/breakpoints';

const LongTerm = ({ weather }) => (
  <Box mx={bp([3, 4])} mb={4}>
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

export default LongTerm;
