import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import PropTypes from 'prop-types';
import { Box } from './design-system';
import SettingHeader from './SettingHeader';
import AddLocationButton from './AddLocationButton';
import LocationSelectItem from './LocationSelectItem';
import { deleteLocation, moveLocation } from '../common/locations/locations.actions';

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

const LocationSelect = ({
  onPressAddLocation,
  locations,
  deleteLocation,
  moveLocation,
  onReorderStart,
  onReorderEnd,
}) => (
  <Box my={3}>
    <SettingHeader textKey="settings:selectLocation" />
    <DraggableFlatList
      data={locations}
      renderItem={({ item: location, index, move, moveEnd }) => (
        <LocationSelectItem
          location={location}
          onPressRemove={() => confirmDelete(location.location, () => deleteLocation(index))}
          onPressMove={() => {
            onReorderStart();
            move();
          }}
          onPressMoveOut={() => {
            onReorderEnd();
            moveEnd();
          }}
          disableButtons={locations.length < 2}
        />
      )}
      keyExtractor={item => item.id}
      onMoveEnd={({ from, to }) => {
        moveLocation(from, to);
      }}
    />
    <AddLocationButton onPress={onPressAddLocation} />
  </Box>
);

LocationSelect.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPressAddLocation: PropTypes.func.isRequired,
  deleteLocation: PropTypes.func.isRequired,
  moveLocation: PropTypes.func.isRequired,
  onReorderStart: PropTypes.func.isRequired,
  onReorderEnd: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locations: state.locations,
});

const mapDispatchToProps = {
  deleteLocation,
  moveLocation,
};

const ConnectedLocationSelect = connect(mapStateToProps, mapDispatchToProps)(LocationSelect);

export default ConnectedLocationSelect;
