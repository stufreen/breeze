import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Svg, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/native';
import { Box } from './design-system';

const SettingsButton = ({ onPress, theme }) => (

  <TouchableOpacity onPress={onPress}>
    <Box width={48} height={48} borderRadius={24} bg="tertiary" alignItems="center" justifyContent="center">
      <Svg width={27} height={18} viewBox="0 0 27 18">
        <Rect id="Rectangle" x="0" y="0" width="27" height="2" fill={theme.colors.primary} />
        <Rect id="Rectangle" x="0" y="8" width="27" height="2" fill={theme.colors.primary} />
        <Rect id="Rectangle" x="0" y="16" width="27" height="2" fill={theme.colors.primary} />
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
