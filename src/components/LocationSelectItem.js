import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Script } from './design-system';
import Chevron from './icons/Chevron';

const LocationSelectItem = ({ onPress, location }) => (
  <TouchableOpacity onPress={onPress}>
    <Box p={3} mb="2px" position="relative" flexDirection="row" alignItems="center" justifyContent="space-between">
      <Box
        position="absolute"
        bg="settingsSelected"
        top={0}
        bottom={0}
        left={0}
        right={0}
      />
      {location && (
        <Script fontSize={2} color="settingsText" flex={1}>
          {location.formatted_address}
        </Script>
      )}
      <Chevron size={14} color="settingsText" />
    </Box>
  </TouchableOpacity>
);

export default LocationSelectItem;
