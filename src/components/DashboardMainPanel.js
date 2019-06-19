import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFetchError } from '../common/locations/locations.actions';
import { refreshWeather } from '../common/locations/locations.thunks';
import Splash from './Splash';
import DashboardCarousel from './DashboardCarousel';

const DashboardMainPanel = props => (props.locations
  ? <DashboardCarousel {...props} />
  : <Splash />);

DashboardMainPanel.defaultProps = {
  locations: null,
};

DashboardMainPanel.propTypes = {
  onPressSettings: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      weather: PropTypes.object,
      location: PropTypes.object,
    }),
  ),
};

const mapStateToProps = state => ({
  locations: state.locations,
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
