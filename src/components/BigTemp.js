import React from 'react';
import PropTypes from 'prop-types';
import { Box, Script } from './design-system';

const BigTemp = ({ temp }) => (
  <Box flexDirection="row" alignItems="flex-start">
    <Script fontSize="160px" color="white">
      {temp || '--'}
    </Script>
    <Script fontSize="60px" lineHeight="140px" color="white">
      &deg;C
    </Script>
  </Box>
);

BigTemp.defaultProps = {
  temp: null,
};

BigTemp.propTypes = {
  temp: PropTypes.number,
};

export default BigTemp;
