import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTheme } from '../common/settings/settings.actions';
import { fetchAndSetWeather } from '../common/weather/weather.actions';
import { Box } from './design-system';
import MultipleChoiceOption from './MultipleChoiceOption';
import SettingHeader from './SettingHeader';

const options = [
  'wine',
  'electric',
];

const ThemeSelect = ({
  setTheme,
  theme,
}) => (
  <Box mt={3}>
    <SettingHeader textKey="settings:theme" />
    {options.map(
      option => (
        <MultipleChoiceOption
          isSelected={option === theme}
          onPress={() => {
            setTheme(option);
            fetchAndSetWeather();
          }}
          key={option}
          textKey={`settings:themes.${option}`}
        />
      ),
    )}
  </Box>
);

ThemeSelect.propTypes = {
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = {
  setTheme,
};

const ConnectedThemeSelect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeSelect);

export default ConnectedThemeSelect;
