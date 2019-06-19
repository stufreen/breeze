import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Box } from './design-system';
import SettingHeader from './SettingHeader';
import AddLocationButton from './AddLocationButton';
import LocationSelectItem from './LocationSelectItem';
import { deleteLocation } from '../common/locations/locations.actions';

const confirmDelete = (location, onDelete) => {
  Alert.alert(
    'Remove Location',
    `Do you want to remove ${location.address_components[0].long_name} from your list of locations?`,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Remove', onPress: onDelete },
    ],
    { cancelable: true },
  );
};

const LocationSelect = ({ onPressAddLocation, locations, deleteLocation }) => (
  <Box my={3}>
    <SettingHeader textKey="settings:selectLocation" />
    <FlatList
      data={locations}
      renderItem={({ item: location, index }) => (
        <LocationSelectItem
          location={location}
          onPress={() => confirmDelete(location.location, () => deleteLocation(index))}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    <AddLocationButton onPress={onPressAddLocation} />
  </Box>
);

LocationSelect.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPressAddLocation: PropTypes.func.isRequired,
  deleteLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locations: state.locations,
});

const mapDispatchToProps = {
  deleteLocation,
};

const ConnectedLocationSelect = connect(mapStateToProps, mapDispatchToProps)(LocationSelect);

export default ConnectedLocationSelect;
