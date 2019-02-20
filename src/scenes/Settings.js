import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import SettingsPanel from '../components/SettingsPanel';

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

  onPressBack = () => {
    const { componentId } = this.props;
    Navigation.pop(componentId);
  }

  render() {
    return <SettingsPanel onPressBack={this.onPressBack} />;
  }
}

Dashboard.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default Dashboard;
