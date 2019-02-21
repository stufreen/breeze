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
      layout: {
        backgroundColor: 'rgb(0, 4, 43)',
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
        options: {
          animations: {
            push: {
              waitForRender: true,
            },
          },
        },
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
