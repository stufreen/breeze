import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box } from './design-system';
import MultipleChoiceOption from './MultipleChoiceOption';
import SettingHeader from './SettingHeader';

const LocationSelect = ({ onPress, location }) => (
  <Box my={3}>
    <SettingHeader>Select Location</SettingHeader>
    <MultipleChoiceOption onPress={onPress}>
      {location.address.city}, {location.address.state}, {location.address.country}
    </MultipleChoiceOption>
  </Box>
);

LocationSelect.propTypes = {
  location: PropTypes.shape({
    address: PropTypes.object,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  location: state.location.location,
});

const ConnectedLocationSelect = connect(mapStateToProps)(LocationSelect);

export default ConnectedLocationSelect;
