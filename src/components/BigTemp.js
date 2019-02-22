import React from 'react';
import PropTypes from 'prop-types';
import { Box, Script, LScript } from './design-system';
import { getTempUnit } from '../services/weather';

const BigTemp = ({ temp, units }) => {
  const tempUnit = getTempUnit(units);
  return (
    <Box flexDirection="row" alignItems="flex-start">
      <Script fontSize={temp > 99 ? '120px' : '140px'} color="accent" header>
        {temp}
      </Script>
      <LScript
        fontSize={6}
        lineHeight={temp > 99 ? '100px' : '110px'}
        color="accent"
        header
        textKey="dashboard:unit"
        interpolation={{ tempUnit }}
      />
    </Box>
  );
};

BigTemp.propTypes = {
  temp: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired,
};

export default BigTemp;
