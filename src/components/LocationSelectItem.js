import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Box, Script } from './design-system';
import Close from './icons/CloseIcon';
import LocationIcon from './icons/LocationIcon';

const LocationSelectItem = ({
  onPressRemove,
  onPressMove,
  onPressMoveOut,
  location,
  disableButtons,
}) => (
  <Box
    mb="2px"
    flexDirection="row"
    alignItems="stretch"
    width="100%"
    height={55}
  >
    <TouchableOpacity
      onPressIn={onPressMove}
      onPressOut={onPressMoveOut}
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
          <Box flexDirection="row" alignItems="center">
            {location.isCurrentLocation && (
              <Box mr={2}>
                <LocationIcon color="settingsText" size={8} />
              </Box>
            )}
            <Script textAlign="center" fontSize={2} color="settingsText" pr={2}>
              {location.location.address_components[0].long_name}
            </Script>
          </Box>
        )}
      </Box>
    </TouchableOpacity>
    {!location.isCurrentLocation && (
      <TouchableOpacity onPress={onPressRemove} disabled={disableButtons}>
        <Box bg="settingsSelected" ml="1px" flex={1} p={3} justifyContent="center" opacity={disableButtons ? 0.2 : 0.8}>
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
  disableButtons: false,
};

LocationSelectItem.propTypes = {
  onPressRemove: PropTypes.func.isRequired,
  onPressMove: PropTypes.func.isRequired,
  onPressMoveOut: PropTypes.func.isRequired,
  location: PropTypes.shape({
    location: PropTypes.shape({
      address_components: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
  disableButtons: PropTypes.bool,
};

export default LocationSelectItem;
