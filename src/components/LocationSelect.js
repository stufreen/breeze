import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Box } from './design-system';
import SettingHeader from './SettingHeader';
import AddLocationButton from './AddLocationButton';
import LocationSelectItem from './LocationSelectItem';

const LocationSelect = ({ onPressAddLocation, onPressEditLocation, locations }) => (
  <Box my={3}>
    <SettingHeader textKey="settings:selectLocation" />
    <FlatList
      data={locations}
      renderItem={({ item, index }) => (
        <LocationSelectItem
          location={item.location}
          onPress={() => onPressEditLocation(index)}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    <AddLocationButton onPress={onPressAddLocation} />
  </Box>
);

LocationSelect.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPressEditLocation: PropTypes.func.isRequired,
  onPressAddLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locations: state.locations,
});

const ConnectedLocationSelect = connect(mapStateToProps)(LocationSelect);

export default ConnectedLocationSelect;
