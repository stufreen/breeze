import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Box, Script } from './design-system';
import Close from './icons/CloseIcon';
import LocationIcon from './icons/LocationIcon';
import bp from '../services/breakpoints';

const LocationSelectItem = ({
  onPressRemove,
  location,
  disableButtons,
  toggleRowActive,
}) => (
  <Box
    mb="2px"
    flexDirection="row"
    alignItems="stretch"
    width="100%"
    height={bp([53, 63])}
  >
    <TouchableOpacity
      onPressIn={toggleRowActive}
      style={{ flex: 1 }}
      disabled={disableButtons}
    >
      <Box
        bg="settingsUnselected"
        flex={1}
        width="100%"
        justifyContent="center"
        pl={3}
      >
        {location.location && (
          <Box flexDirection="row" alignItems="center" ph={3}>
            {location.isCurrentLocation
              ? (
                <Box mr={2}>
                  <LocationIcon color="settingsText" size={8} />
                </Box>
              ) : (
                <Box mr={2} width={8} />
              )
            }
            <Script textAlign="center" fontSize={2} color="settingsText" pr={2}>
              {location.location.address_components[0].long_name}
            </Script>
          </Box>
        )}
      </Box>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={onPressRemove}
      disabled={disableButtons || location.isCurrentLocation}
    >
      <Box
        bg={disableButtons || location.isCurrentLocation ? 'settingsUnselected' : 'settingsSelected'}
        ml="1px"
        flex={1}
        p={3}
        justifyContent="center"
      >
        <Box opacity={disableButtons || location.isCurrentLocation ? 0.2 : 0.8}>
          <Close size={14} color="settingsText" />
        </Box>
      </Box>
    </TouchableOpacity>
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
  disableButtons: false,
  toggleRowActive: () => {},
};

LocationSelectItem.propTypes = {
  onPressRemove: PropTypes.func.isRequired,
  location: PropTypes.shape({
    location: PropTypes.shape({
      address_components: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
  disableButtons: PropTypes.bool,
  toggleRowActive: PropTypes.func,
};

export default LocationSelectItem;
