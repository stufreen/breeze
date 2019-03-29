import React from 'react';
import PropTypes from 'prop-types';
import { Box, Script } from './design-system';
import LocationIcon from './icons/LocationIcon';

const LocationAddress = ({ location }) => (
  <Box flexDirection="row" alignItems="center">
    {location.isCurrentLocation && (
      <Box mr={2}>
        <LocationIcon color="primary" size={15} />
      </Box>
    )}
    <Script textAlign="center" fontSize={3} color="primary" header>{location.location.formatted_address}</Script>
  </Box>
);

LocationAddress.defaultProps = {
  location: null,
};

LocationAddress.propTypes = {
  location: PropTypes.shape({
    formatted_address: PropTypes.string,
    isCurrentLocation: PropTypes.bool,
  }),
};

export default LocationAddress;
