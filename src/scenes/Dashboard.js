import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import DashboardMainPanel from '../components/DashboardMainPanel';

class Dashboard extends Component {
  static options() {
    return {
      topBar: {
        visible: false,
      },
      statusBar: {
        style: 'light',
      },
    };
  }

  onPressSettings = () => {
    const { componentId } = this.props;
    Navigation.push(componentId, {
      component: {
        name: 'Settings',
      },
    });
  }

  render() {
    return <DashboardMainPanel onPressSettings={this.onPressSettings} />;
  }
}

Dashboard.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default Dashboard;
