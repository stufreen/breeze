import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

const LocationIcon = ({ size = 18, color = 'white', theme }) => (
  <Svg height={size} width={size} viewBox="0 0 612 612">
    <Path d="m612 0-612 208.636 306 96.223 97.363 307.141z" fill={theme.colors[color] || color} />
  </Svg>
);

LocationIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

export default withTheme(LocationIcon);
