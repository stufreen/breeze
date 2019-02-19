import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/native';
import { Box, Script } from '../design-system';
import DarkSkyLogo from './DarkSkyLogo';

const PoweredBy = ({ theme }) => (
  <Box flexDirection="row" alignItems="center" justifyContent="center" opacity={0.7} mb={4}>
    <DarkSkyLogo color={theme.colors.primary} size={16} />
    <Script ml={2} fontSize={0}>Powered by Dark Sky</Script>
  </Box>
);

PoweredBy.propTypes = {
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

export default withTheme(PoweredBy);
