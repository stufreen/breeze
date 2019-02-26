import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import SettingsPanel from '../components/SettingsPanel';

class Dashboard extends Component {
  static options() {
    return {
      topBar: {
        visible: false,
        height: 0,
      },
      layout: {
        backgroundColor: 'rgb(0, 4, 43)',
      },
      statusBar: {
        style: 'light',
        backgroundColor: 'transparent',
        drawBehind: true,
      },
    };
  }

  onPressBack = () => {
    const { componentId } = this.props;
    Navigation.pop(componentId);
  }

  onPressLocation = () => {
    const { componentId } = this.props;
    Navigation.push(componentId, {
      component: {
        name: 'LocationSearch',
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
    return <SettingsPanel onPressBack={this.onPressBack} onPressLocation={this.onPressLocation} />;
  }
}

Dashboard.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default Dashboard;
