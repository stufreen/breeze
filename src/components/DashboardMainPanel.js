import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Box, ScrollBox } from './design-system';
import DashboardHero from './DashboardHero';
import Hourly from './Hourly';
import SettingsButton from './SettingsButton';
import LongTerm from './LongTerm';
import Alert from './Alert';
import DashboardBackground from './DashboardBackground';
import { refreshWeather } from '../common/weather/weather.actions';
import Splash from './Splash';

const Dash = ({
  onPressSettings,
  isFetchingWeather,
  refreshWeather,
  weather,
}) => (
  <Box flex={1} position="relative">
    <DashboardBackground iconKey={weather.currently.icon} />
    <ScrollBox
      flex={1}
      contentContainerStyle={{ minHeight: '100%' }}
      refreshControl={(
        <RefreshControl
          refreshing={isFetchingWeather}
          onRefresh={refreshWeather}
          tintColor="white"
        />
      )}
    >
      <Box>
        <DashboardHero />
        <Alert />
        <Hourly />
        <LongTerm />
      </Box>
    </ScrollBox>
    <Box position="absolute" mt={4} ml={3}>
      <SettingsButton
        onPress={onPressSettings}
      />
    </Box>
  </Box>
);

Dash.propTypes = {
  onPressSettings: PropTypes.func.isRequired,
  isFetchingWeather: PropTypes.bool.isRequired,
  refreshWeather: PropTypes.func.isRequired,
  weather: PropTypes.shape({ currently: PropTypes.object }).isRequired,
};

const DashboardMainPanel = props => (props.weather ? <Dash {...props} /> : <Splash />);

DashboardMainPanel.defaultProps = {
  weather: {
    currently: {
      icon: null,
    },
  },
};

DashboardMainPanel.propTypes = {
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
