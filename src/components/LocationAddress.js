import React from 'react';
import PropTypes from 'prop-types';
import { Box, Script } from './design-system';
import LocationIcon from './icons/LocationIcon';

const LocationAddress = ({ location }) => (
  <Box flexDirection="row" alignItems="center">
    {location.isCurrentLocation && (
      <Box mr={2}>
        <LocationIcon color="primary" size={10} />
      </Box>
    )}
    <Script textAlign="center" fontSize={3} color="primary" header pr={2}>
      {location.location.address_components[0].long_name}
    </Script>
  </Box>
);

LocationAddress.defaultProps = {
  location: null,
};

LocationAddress.propTypes = {
  location: PropTypes.shape({
    address_components: PropTypes.array,
    isCurrentLocation: PropTypes.bool,
  }),
};

export default LocationAddress;
