import React from 'react';
import PropTypes from 'prop-types';
import { Box, Script } from './design-system';

const BigTemp = ({ temp }) => (
  <Box flexDirection="row" alignItems="flex-start">
    <Script fontSize="160px" color="primary" header>
      {temp || '--'}
    </Script>
    <Script fontSize={6} lineHeight="130px" color="primary" header>
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
