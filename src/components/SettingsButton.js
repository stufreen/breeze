import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Svg, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/native';

const SettingsButton = ({ onPress, theme }) => (
  <TouchableOpacity onPress={onPress}>
    <Svg width={27} height={18} viewBox="0 0 27 18">
      <Rect id="Rectangle" x="0" y="0" width="27" height="2" fill={theme.colors.primary} />
      <Rect id="Rectangle" x="0" y="8" width="27" height="2" fill={theme.colors.primary} />
      <Rect id="Rectangle" x="0" y="16" width="27" height="2" fill={theme.colors.primary} />
    </Svg>
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
