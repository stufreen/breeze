import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/native';
import { Box } from './design-system';

const SettingsButton = ({ onPress, theme }) => (
  <TouchableOpacity onPress={onPress}>
    <Box width={48} height={48} borderRadius={24} bg="tertiary" alignItems="center" justifyContent="center">
      <Svg width={23} height={23} viewBox="0 0 23 23">
        <Path d="M15 2 L4 12.5 L15 22" stroke={theme.colors.primary} strokeWidth="2.5" fill="none" />
      </Svg>
    </Box>
  </TouchableOpacity>
);

SettingsButton.defaultProps = {
  onPress: () => {},
};

SettingsButton.propTypes = {
  onPress: PropTypes.func,
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

export default withTheme(SettingsButton);
