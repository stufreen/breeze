import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/native';
import { Box, ScrollBox } from './design-system';
import DashboardHero from './DashboardHero';
import Hourly from './Hourly';
import SettingsButton from './SettingsButton';
import LongTerm from './LongTerm';
import Alert from './Alert';
import DashboardBackground from './DashboardBackground';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
      heroHeight: 0,
    };
  }

  handleScroll = (e) => {
    this.setState({
      scrollY: e.nativeEvent.contentOffset.y,
    });
  }

  affixHero = ({ nativeEvent }) => {
    this.setState({
      heroHeight: nativeEvent.layout.height,
    });
  }

  render() {
    const { weather, onPressSettings, theme } = this.props;
    const { scrollY, heroHeight } = this.state;
    return (
      <Box flex={1} position="relative" bg="mainBackground">
        <StatusBar barStyle={theme.statusBarMain} />
        <DashboardBackground iconKey={weather.currently.icon} />
        <Box
          position={heroHeight ? 'absolute' : 'relative'}
          width="100%"
          pt={4}
          onLayout={this.affixHero}
        >
          <DashboardHero opacity={heroHeight ? 1 - (scrollY / (heroHeight / 3)) : 1} />
        </Box>
        <ScrollBox
          flex={1}
          contentContainerStyle={{
            minHeight: '100%',
            paddingTop: heroHeight,
          }}
          scrollEventThrottle={32}
          onScroll={this.handleScroll}
          onMomentumScrollEnd={this.handleScroll}
          contentInsetAdjustmentBehavior="never"
        >
          <Box>
            <Alert />
            <Hourly />
            <LongTerm />
          </Box>
        </ScrollBox>
        <Box position="absolute" mt={4} ml={3} pt={2}>
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
  theme: PropTypes.shape({ statusBarMain: PropTypes.string }).isRequired,
};

export default withTheme(Dashboard);
