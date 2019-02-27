import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Box, ScrollBox, LScript } from './design-system';
import DashboardHero from './DashboardHero';
import Hourly from './Hourly';
import SettingsButton from './SettingsButton';
import LongTerm from './LongTerm';
import Alert from './Alert';
import DashboardBackground from './DashboardBackground';
import { refreshWeather, setFetchError } from '../common/weather/weather.actions';
import Splash from './Splash';
import FlashMessage from './FlashMessage';

const Dash = ({
  onPressSettings,
  isFetchingWeather,
  refreshWeather,
  setFetchError,
  weather,
  fetchError,
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
    <Box position="absolute" bottom={0} p={4} width="100%">
      <FlashMessage show={fetchError !== null} onClose={() => { setFetchError(null); }}>
        <LScript color="secondary" header textKey={`errors:${fetchError}.header`} mb={2} />
        <LScript color="secondary" textKey={`errors:${fetchError}.body`} />
      </FlashMessage>
    </Box>
  </Box>
);

Dash.defaultProps = {
  fetchError: null,
};

Dash.propTypes = {
  onPressSettings: PropTypes.func.isRequired,
  isFetchingWeather: PropTypes.bool.isRequired,
  refreshWeather: PropTypes.func.isRequired,
  setFetchError: PropTypes.func.isRequired,
  weather: PropTypes.shape({ currently: PropTypes.object }).isRequired,
  fetchError: PropTypes.string,
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
  fetchError: state.weather.fetchError,
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
