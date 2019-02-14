import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardHero from '../components/DashboardHero';
import { fetchAndSetWeather } from '../common/weather/weather.actions';

class Dashboard extends Component {
  static options() {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  componentDidMount() {
    const { fetchAndSetWeather } = this.props;
    fetchAndSetWeather();
  }

  render() {
    const { componentId } = this.props;
    return <DashboardHero componentId={componentId} />;
  }
}

Dashboard.propTypes = {
  fetchAndSetWeather: PropTypes.func.isRequired,
  componentId: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  fetchAndSetWeather,
};

const ConnectedDashboard = connect(null, mapDispatchToProps)(Dashboard);

export default ConnectedDashboard;
