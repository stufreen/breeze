import React from 'react';
import PropTypes from 'prop-types';
import { Box, ScrollBox } from './design-system';
import DashboardHero from './DashboardHero';
import Hourly from './Hourly';
import SettingsButton from './SettingsButton';
import LongTerm from './LongTerm';
import Alert from './Alert';
import DashboardBackground from './DashboardBackground';
import bp from '../services/breakpoints';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };
  }

  handleScroll = (e) => {
    this.setState({
      scrollY: e.nativeEvent.contentOffset.y,
    });
  }

  render() {
    const { weather, onPressSettings } = this.props;
    const { scrollY } = this.state;
    return (
      <Box flex={1} position="relative">
        <DashboardBackground iconKey={weather.currently.icon} />
        <Box position="absolute" width="100%" pt={4}>
          <DashboardHero scrollY={scrollY} />
        </Box>
        <ScrollBox
          flex={1}
          contentContainerStyle={{ minHeight: '100%', paddingTop: bp([400, 500]) }}
          scrollEventThrottle={32}
          onScroll={this.handleScroll}
          onMomentumScrollEnd={this.handleScroll}
        >
          <Box>
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
      </Box>
    );
  }
}

Dashboard.propTypes = {
  onPressSettings: PropTypes.func.isRequired,
  weather: PropTypes.shape({ currently: PropTypes.object }).isRequired,
};

export default Dashboard;
