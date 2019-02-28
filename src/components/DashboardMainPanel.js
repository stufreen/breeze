import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, ScrollBox } from './design-system';
import DashboardHero from './DashboardHero';
import Hourly from './Hourly';
import SettingsButton from './SettingsButton';
import LongTerm from './LongTerm';
import Alert from './Alert';
import DashboardBackground from './DashboardBackground';
import { refreshWeather, setFetchError } from '../common/weather/weather.actions';
import Splash from './Splash';

const Dash = ({
  onPressSettings,
  weather,
}) => (
  <Box flex={1} position="relative">
    <DashboardBackground iconKey={weather.currently.icon} />
    <ScrollBox
      flex={1}
      contentContainerStyle={{ minHeight: '100%' }}
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
  weather: PropTypes.shape({ currently: PropTypes.object }).isRequired,
};

const DashboardMainPanel = props => (props.weather && props.location
  ? <Dash {...props} />
  : <Splash />);

DashboardMainPanel.defaultProps = {
  weather: null,
  location: null,
};

DashboardMainPanel.propTypes = {
  weather: PropTypes.shape({ currently: PropTypes.object }),
  location: PropTypes.shape({ currently: PropTypes.object }),
};

const mapStateToProps = state => ({
  weather: state.weather.weather,
  location: state.location.location,
});

const mapDispatchToProps = {
  refreshWeather,
  setFetchError,
};

const ConnectedDashboardMainPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardMainPanel);

export default ConnectedDashboardMainPanel;
