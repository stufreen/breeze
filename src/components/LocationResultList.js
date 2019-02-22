import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Box, Script, LScript } from './design-system';
import LocationIcon from './LocationIcon';

const LocationResultList = ({ places, onSelectPlace, onSelectCurrent }) => (
  <Box width="100%" opacity={0.8} mt="1px">
    {places.length === 0
      && <LScript textAlign="center" m={3} fontSize={2} opacity={0.8} textKey="location:typeAbove" />}
    { places.map(place => (
      <TouchableOpacity onPress={() => onSelectPlace(place)} key={place.place_id}>
        <Box p={3} mb="1px" position="relative">
          <Box position="absolute" bg="primary" opacity={0.1} top={0} bottom={0} left={0} right={0} />
          <Script color="primary" fontSize={2}>{place.description}</Script>
        </Box>
      </TouchableOpacity>
    )) }
    <TouchableOpacity onPress={onSelectCurrent}>
      <Box p={3} mb="1px" position="relative" flexDirection="row" alignItems="center">
        <Box position="absolute" bg="primary" opacity={0.1} top={0} bottom={0} left={0} right={0} />
        <LocationIcon size={12} color="primary" />
        <LScript color="primary" fontSize={2} ml={2} textKey="location:currentLocation" />
      </Box>
    </TouchableOpacity>
  </Box>
);

LocationResultList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectPlace: PropTypes.func.isRequired,
  onSelectCurrent: PropTypes.func.isRequired,
};

export default LocationResultList;
