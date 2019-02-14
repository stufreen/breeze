import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DashboardHero from '../components/DashboardHero';

class Dashboard extends Component {
  static options() {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  render() {
    const { componentId } = this.props;
    return <DashboardHero componentId={componentId} />;
  }
}

Dashboard.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default Dashboard;
