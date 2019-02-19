import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Box, Script } from '../design-system';
import { farenheitToCelcius } from '../../services/weather';
import Chart from './Chart';

const HourlyChart = ({ hours }) => (
  <Box flexDirection="row">
    {
      hours.map(item => (
        <Box
          width={68}
          height={150}
          mx="1px"
          bg="primaryTransparent"
          key={item.time}
          alignItems="center"
          justifyContent="flex-start"
          borderRadius={3}
          pt={3}
        >
          <Script fontSize={0}>{moment(item.time * 1000).format('h A')}</Script>
          <Script mt={1} fontSize={1} header>
            {farenheitToCelcius(item.temperature)}
            &deg;C
          </Script>
        </Box>
      ))
    }
    <Box position="absolute" top={70}>
      <Chart hours={hours} width={70 * hours.length} height={60} />
    </Box>
  </Box>
);

HourlyChart.propTypes = {
  hours: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HourlyChart;