import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Box } from './design-system';
import BackIcon from './icons/BackIcon';

const BackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Box width={48} height={48} borderRadius={24} bg="tertiary" alignItems="center" justifyContent="center">
      <BackIcon size={23} color="primary" />
    </Box>
  </TouchableOpacity>
);

BackButton.defaultProps = {
  onPress: () => {},
};

BackButton.propTypes = {
  onPress: PropTypes.func,
};

export default BackButton;
