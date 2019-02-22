import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

const Chevron = ({ size = 18, color = 'white', theme }) => (
  <Svg width={size} height={size} viewBox="0 0 23 23">
    <Path d="M10 2 L21 12.5 L10 22" stroke={theme.colors[color] || color} strokeWidth="3.5" fill="none" />
  </Svg>
);

Chevron.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

export default withTheme(Chevron);
