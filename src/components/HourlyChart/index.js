import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { withTheme } from 'styled-components/native';
import { Box, Script } from '../design-system';
import Chart from './Chart';
import Climacon from '../Climacon';
import { formatTemp } from '../../services/weather';
import bp from '../../services/breakpoints';

const HourlyChart = ({ hours, timezone, theme }) => (
  <Box flexDirection="row">
    {
      hours.map((item) => {
        const pop = Math.round(item.precipProbability * 10) * 10;
        return (
          <Box
            width={bp([68, 88])}
            height={bp([204, 240])}
            mx="1px"
            bg="translucent"
            key={item.time}
            alignItems="center"
            justifyContent="flex-start"
            borderRadius={3}
            pt={3}
          >
            <Script fontSize={0} mb={1}>{moment(item.time * 1000).tz(timezone).format('h A')}</Script>
            <Climacon iconKey={item.icon} size={48} color={theme.colors.accent} />
            <Script fontSize={2} header>
              {formatTemp(item.temperature)}
              &deg;
            </Script>
            {pop > 0 && <Script fontSize={0} opacity={0.8}>{pop}%</Script>}
          </Box>
        );
      })
    }
    <Box position="absolute" top={theme.space[6]}>
      <Chart hours={hours} width={bp([70, 90]) * hours.length} height={60} />
    </Box>
  </Box>
);

HourlyChart.propTypes = {
  hours: PropTypes.arrayOf(PropTypes.object).isRequired,
  timezone: PropTypes.string.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.object, space: PropTypes.array }).isRequired,
};

export default withTheme(HourlyChart);
