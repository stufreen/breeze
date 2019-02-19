import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components/native';
import { Box, ScrollBox } from './design-system';
import DashboardHero from './DashboardHero';
import Hourly from './Hourly';
import SettingsButton from './SettingsButton';
import { refreshWeather } from '../common/weather/weather.actions';

const DashboardMainPanel = ({
  onPressSettings,
  isFetchingWeather,
  refreshWeather,
  theme,
}) => (
  <Box flex={1}>
    <ScrollBox
      bg="secondary"
      flex={1}
      refreshControl={(
        <RefreshControl
          refreshing={isFetchingWeather}
          onRefresh={refreshWeather}
          tintColor={theme.colors.primary}
        />
      )}
    >
      <DashboardHero />
      <Hourly />
    </ScrollBox>
    <Box position="absolute" mt={5} ml={4}>
      <SettingsButton
        onPress={onPressSettings}
      />
    </Box>
  </Box>
);

DashboardMainPanel.propTypes = {
  onPressSettings: PropTypes.func.isRequired,
  isFetchingWeather: PropTypes.bool.isRequired,
  refreshWeather: PropTypes.func.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

const ThemedDashboardMainPanel = withTheme(DashboardMainPanel);

const mapStateToProps = state => ({
  isFetchingWeather: state.weather.isFetchingWeather,
});

const mapDispatchToProps = {
  refreshWeather,
};

const ConnectedDashboardMainPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemedDashboardMainPanel);

export default ConnectedDashboardMainPanel;
