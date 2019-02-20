import React from 'react';
import PropTypes from 'prop-types';
import { Box, ScrollBox, Script } from './design-system';
import BackButton from './BackButton';
import UnitSelect from './UnitSelect';
import LocationSelect from './LocationSelect';

const SettingsPanel = ({
  onPressBack,
}) => (
  <Box flex={1}>
    <ScrollBox bg="secondary" flex={1}>
      <Box pt={5} px={4}>
        <Script header fontSize={3} textAlign="center">Settings</Script>
        <LocationSelect />
        <UnitSelect />
      </Box>
    </ScrollBox>
    <Box position="absolute" mt={5} ml={3}>
      <BackButton
        onPress={onPressBack}
      />
    </Box>
  </Box>
);

SettingsPanel.propTypes = {
  onPressBack: PropTypes.func.isRequired,
};

export default SettingsPanel;
