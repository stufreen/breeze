import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Box, Script } from './design-system';
import Close from './icons/CloseIcon';
import LocationIcon from './icons/LocationIcon';

const LocationSelectItem = ({ onPress, location }) => (
  <Box
    mb="2px"
    position="relative"
    flexDirection="row"
    alignItems="stretch"
  >
    <Box
      bg="settingsUnselected"
      flex={1}
      p={3}
    >
      {location.location && (
        <Box flexDirection="row" alignItems="center">
          {location.isCurrentLocation && (
            <Box mr={2}>
              <LocationIcon color="primary" size={8} />
            </Box>
          )}
          <Script textAlign="center" fontSize={2} color="primary" pr={2}>
            {location.location.address_components[0].long_name}
          </Script>
        </Box>
      )}
    </Box>
    {!location.isCurrentLocation && (
      <TouchableOpacity onPress={onPress}>
        <Box bg="settingsSelected" ml="1px" flex={1} p={3} justifyContent="center" opacity={0.8}>
          <Close size={14} color="settingsText" />
        </Box>
      </TouchableOpacity>
    )}
  </Box>
);

LocationSelectItem.defaultProps = {
  location: {
    location: {
      address_components: [
        { long_name: '' },
      ],
    },
  },
};

LocationSelectItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  location: PropTypes.shape({
    location: PropTypes.shape({
      address_components: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

export default LocationSelectItem;
