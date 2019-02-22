import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Box, ScrollBox } from './design-system';
import DashboardHero from './DashboardHero';
import Hourly from './Hourly';
import SettingsButton from './SettingsButton';
import PoweredBy from './PoweredBy';
import LongTerm from './LongTerm';
import Alert from './Alert';
import DashboardBackground from './DashboardBackground';
import { refreshWeather } from '../common/weather/weather.actions';

const DashboardMainPanel = ({
  onPressSettings,
  isFetchingWeather,
  refreshWeather,
  weather,
}) => (
  <Box flex={1} position="relative">
    <DashboardBackground iconKey={weather ? weather.currently.icon : null} />
    <ScrollBox
      flex={1}
      refreshControl={(
        <RefreshControl
          refreshing={isFetchingWeather}
          onRefresh={refreshWeather}
          tintColor="white"
        />
      )}
    >
      <DashboardHero />
      <Alert />
      <Hourly />
      <LongTerm />
      <PoweredBy />
    </ScrollBox>
    <Box position="absolute" mt={4} ml={3}>
      <SettingsButton
        onPress={onPressSettings}
      />
    </Box>
  </Box>
);

DashboardMainPanel.defaultProps = {
  weather: {
    currently: {
      icon: null,
    },
  },
};

DashboardMainPanel.propTypes = {
  onPressSettings: PropTypes.func.isRequired,
  isFetchingWeather: PropTypes.bool.isRequired,
  refreshWeather: PropTypes.func.isRequired,
  weather: PropTypes.shape({ currently: PropTypes.object }),
};

const mapStateToProps = state => ({
  isFetchingWeather: state.weather.isFetchingWeather,
  weather: state.weather.weather,
});

const mapDispatchToProps = {
  refreshWeather,
};

const ConnectedDashboardMainPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardMainPanel);

export default ConnectedDashboardMainPanel;
