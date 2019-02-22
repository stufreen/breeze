import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Box, Script } from './design-system';

const LocationResultList = ({ places, onSelectPlace }) => (
  <Box width="100%" opacity={0.8} mt="1px">
    { places.map(place => (
      <TouchableOpacity onPress={() => onSelectPlace(place)} key={place.place_id}>
        <Box p={3} mb="1px" position="relative">
          <Box position="absolute" bg="primary" opacity={0.1} top={0} bottom={0} left={0} right={0} />
          <Script color="primary" fontSize={2}>{place.description}</Script>
        </Box>
      </TouchableOpacity>
    )) }
    {places.length === 0 && <Script textAlign="center" m={3} fontSize={2} opacity={0.8}>Type a city name in the space above</Script>}
  </Box>
);

LocationResultList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectPlace: PropTypes.func.isRequired,
};

export default LocationResultList;
