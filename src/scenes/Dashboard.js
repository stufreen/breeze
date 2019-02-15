import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { Box, ScrollBox } from '../components/design-system';
import DashboardHero from '../components/DashboardHero';
import Hourly from '../components/Hourly';
import SettingsButton from '../components/SettingsButton';

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

  render() {
    const { componentId } = this.props;
    return (
      <Box flex={1}>
        <ScrollBox bg="#222222" flex={1}>
          <DashboardHero componentId={componentId} />
          <Hourly />
        </ScrollBox>
        <Box position="absolute" mt={5} ml={4}>
          <SettingsButton
            onPress={() => {
              Navigation.push(componentId, {
                component: {
                  name: 'Settings',
                },
              });
            }}
          />
        </Box>
      </Box>
    );
  }
}

Dashboard.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default Dashboard;
