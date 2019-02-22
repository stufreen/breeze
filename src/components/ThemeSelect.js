import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTheme } from '../common/settings/settings.actions';
import { fetchAndSetWeather } from '../common/weather/weather.actions';
import { Box } from './design-system';
import MultipleChoiceOption from './MultipleChoiceOption';
import SettingHeader from './SettingHeader';

const options = [
  {
    key: 'wine',
    label: 'Wine',
  },
  {
    key: 'electric',
    label: 'Electric',
  },
  // {
  //   key: 'mono',
  //   label: 'Monochrome',
  // },
  // {
  //   key: 'desert',
  //   label: 'Desert',
  // },
];

const ThemeSelect = ({
  setTheme,
  theme,
}) => (
  <Box my={3}>
    <SettingHeader>Theme</SettingHeader>
    {options.map(
      option => (
        <MultipleChoiceOption
          isSelected={option.key === theme}
          onPress={() => {
            setTheme(option.key);
            fetchAndSetWeather();
          }}
          key={option.key}
        >
          {option.label}
        </MultipleChoiceOption>
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
