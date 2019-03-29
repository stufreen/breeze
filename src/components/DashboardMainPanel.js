import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFetchError } from '../common/locations/locations.actions';
import { refreshWeather } from '../common/locations/locations.thunks';
import Splash from './Splash';
import Dashboard from './Dashboard';

const DashboardMainPanel = props => (props.weather && props.location
  ? <Dashboard {...props} />
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
  weather: state.locations[0].weather,
  location: state.locations[0].location,
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
