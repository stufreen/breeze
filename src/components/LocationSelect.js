import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Box, Script } from './design-system';
import SettingHeader from './SettingHeader';
import Chevron from './icons/Chevron';

const LocationSelect = ({ onPress, location }) => (
  <Box my={3}>
    <SettingHeader textKey="settings:selectLocation" />
    <TouchableOpacity onPress={onPress}>
      <Box p={3} mb="2px" position="relative" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box
          position="absolute"
          bg="settingsSelected"
          top={0}
          bottom={0}
          left={0}
          right={0}
        />
        <Script fontSize={2} color="settingsText" flex={1}>
          {location.formatted_address}
        </Script>
        <Chevron size={14} color="settingsText" />
      </Box>
    </TouchableOpacity>
  </Box>
);

LocationSelect.propTypes = {
  location: PropTypes.shape({
    address: PropTypes.object,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  location: state.locations[0].location,
});

const ConnectedLocationSelect = connect(mapStateToProps)(LocationSelect);

export default ConnectedLocationSelect;
