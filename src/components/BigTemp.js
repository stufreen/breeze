import React from 'react';
import PropTypes from 'prop-types';
import { Box, Script, LScript } from './design-system';
import { getTempUnit } from '../services/weather';
import bp from '../services/breakpoints';

const BigTemp = ({ temp, units }) => {
  const tempUnit = getTempUnit(units);
  return (
    <Box flexDirection="row" alignItems="flex-start" pl={4}>
      <Script fontSize={temp > 99 ? bp(['120px', '150px']) : bp(['140px', '170px'])} color="accent" header>
        {temp}
      </Script>
      <LScript
        fontSize={6}
        lineHeight={temp > 99 ? bp(['100px', '120px']) : bp(['110px', '130px'])}
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
