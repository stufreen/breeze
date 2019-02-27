import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

const BackIcon = ({ size = 23, color = 'white', theme }) => (
  <Svg width={size} height={size} viewBox="0 0 23 23">
    <Path d="M15 2 L4 12.5 L15 22" stroke={theme.colors[color] || color} strokeWidth="2.5" fill="none" />
  </Svg>
);

BackIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

export default withTheme(BackIcon);
