import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { withTheme } from 'styled-components/native';
import { Box, ScrollBox, Script } from './design-system';
import BackButton from './BackButton';
import UnitSelect from './UnitSelect';
import ThemeSelect from './ThemeSelect';
import LocationSelect from './LocationSelect';
import About from './About';

const SettingsPanel = ({
  onPressBack,
  onPressEditLocation,
  onPressAddLocation,
  theme,
}) => (
  <Box flex={1}>
    <StatusBar barStyle={theme.statusBarSettings} />
    <ScrollBox bg="settingsBackground" flex={1} contentContainerStyle={{ alignItems: 'center' }}>
      <Box pt={5} px={3} maxWidth={480} flex={1} width="100%">
        <Script header fontSize={3} textAlign="center" color="accent">Settings</Script>
        <LocationSelect
          onPressEditLocation={onPressEditLocation}
          onPressAddLocation={onPressAddLocation}
        />
        <UnitSelect />
        <ThemeSelect />
        <About />
      </Box>
    </ScrollBox>
    <Box position="absolute" mt={4} ml={3} pt={2}>
      <BackButton
        onPress={onPressBack}
      />
    </Box>
  </Box>
);

SettingsPanel.propTypes = {
  onPressBack: PropTypes.func.isRequired,
  onPressEditLocation: PropTypes.func.isRequired,
  onPressAddLocation: PropTypes.func.isRequired,
  theme: PropTypes.shape({ statusBarMain: PropTypes.string }).isRequired,
};

export default withTheme(SettingsPanel);
