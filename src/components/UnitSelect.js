import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUnits } from '../common/settings/settings.actions';
import { fetchAndSetWeather } from '../common/locations/locations.thunks';
import { Box } from './design-system';
import MultipleChoiceOption from './MultipleChoiceOption';
import SettingHeader from './SettingHeader';

const options = [
  'auto',
  'si',
  'us',
  'uk2',
];

const UnitSelect = ({
  setUnits,
  fetchAndSetWeather,
  units,
}) => (
  <Box my={3}>
    <SettingHeader textKey="settings:unitHeading" />
    {options.map(
      unitKey => (
        <MultipleChoiceOption
          isSelected={units === unitKey}
          onPress={() => {
            setUnits(unitKey);
            fetchAndSetWeather(0);
          }}
          key={unitKey}
          textKey={`settings:units.${unitKey}`}
        />
      ),
    )}
  </Box>
);

UnitSelect.propTypes = {
  fetchAndSetWeather: PropTypes.func.isRequired,
  setUnits: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  units: state.settings.units,
});

const mapDispatchToProps = {
  setUnits,
  fetchAndSetWeather,
};

const ConnectedUnitSelect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitSelect);

export default ConnectedUnitSelect;
