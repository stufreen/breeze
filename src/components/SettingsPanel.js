import React from 'react';
import PropTypes from 'prop-types';
import { Box, ScrollBox, Script } from './design-system';
import BackButton from './BackButton';
import UnitSelect from './UnitSelect';
import ThemeSelect from './ThemeSelect';
import LocationSelect from './LocationSelect';
import About from './About';

const SettingsPanel = ({
  onPressBack,
  onPressLocation,
}) => (
  <Box flex={1}>
    <ScrollBox bg="secondary" flex={1}>
      <Box pt={5} px={3}>
        <Script header fontSize={3} textAlign="center">Settings</Script>
        <LocationSelect onPress={onPressLocation} />
        <UnitSelect />
        <ThemeSelect />
        <About />
      </Box>
    </ScrollBox>
    <Box position="absolute" mt={4} ml={3}>
      <BackButton
        onPress={onPressBack}
      />
    </Box>
  </Box>
);

SettingsPanel.propTypes = {
  onPressBack: PropTypes.func.isRequired,
  onPressLocation: PropTypes.func.isRequired,
};

export default SettingsPanel;
