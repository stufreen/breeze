import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Box, Script, LScript } from './design-system';
// import LocationIcon from './icons/LocationIcon';

const LocationResultList = ({ places, onSelectPlace }) => (
  <Box width="100%" opacity={0.8} mt="1px">
    {places.length === 0
      && <LScript textAlign="center" m={3} fontSize={2} opacity={0.8} textKey="locationSearch:typeAbove" color="settingsText" />}
    { places.map(place => (
      <TouchableOpacity onPress={() => onSelectPlace(place)} key={place.place_id}>
        <Box p={3} mb="1px" bg="settingsUnselected">
          <Script color="settingsText" fontSize={2}>{place.description}</Script>
        </Box>
      </TouchableOpacity>
    )) }
  </Box>
);

LocationResultList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectPlace: PropTypes.func.isRequired,
};

export default LocationResultList;
