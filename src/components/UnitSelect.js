import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUnits } from '../common/settings/settings.actions';
import { fetchAndSetWeather } from '../common/weather/weather.actions';
import { UNIT_OPTIONS } from '../common/settings/settings.constants';
import { Box } from './design-system';
import MultipleChoiceOption from './MultipleChoiceOption';
import SettingHeader from './SettingHeader';

const unitLabels = {
  us: 'United States',
  uk2: 'United Kingdom',
  ca: 'Canada',
  si: 'Metric',
  auto: 'Automatic',
};

const UnitSelect = ({
  setUnits,
  fetchAndSetWeather,
  units,
}) => (
  <Box my={3}>
    <SettingHeader>Units</SettingHeader>
    {UNIT_OPTIONS.map(
      unitKey => (
        <MultipleChoiceOption
          isSelected={units === unitKey}
          onPress={() => {
            setUnits(unitKey);
            fetchAndSetWeather();
          }}
          key={unitKey}
        >
          {unitLabels[unitKey]}
        </MultipleChoiceOption>
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
