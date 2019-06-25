import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Box, LScript } from './design-system';

const AddLocationButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Box
      py={2}
      px={3}
      borderRadius={24}
      bg="settingsSelected"
      alignItems="center"
      justifyContent="center"
      alignSelf="flex-end"
      mt={1}
    >
      <LScript
        textKey="settings:addLocation"
        color="settingsText"
        fontSize={0}
        header
        opacity={0.9}
      />
    </Box>
  </TouchableOpacity>
);

AddLocationButton.defaultProps = {
  onPress: () => { },
};

AddLocationButton.propTypes = {
  onPress: PropTypes.func,
};

export default AddLocationButton;
