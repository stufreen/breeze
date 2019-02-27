import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

const CloseIcon = ({ size = 18, color = 'white', theme }) => (
  <Svg width={size} height={size} viewBox="0 0 23 23">
    <Path d="M1 1 L22 22 M22 1 L1 22" stroke={theme.colors[color] || color} strokeWidth="3.5" fill="none" />
  </Svg>
);

CloseIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

export default withTheme(CloseIcon);
