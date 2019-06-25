import React from 'react';
import * as R from 'ramda';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/native';
import { Box, ScrollBox } from './design-system';
import DashboardHero from './DashboardHero';
import Hourly from './Hourly';
import LongTerm from './LongTerm';
import Alert from './Alert';
import DashboardBackground from './DashboardBackground';

class DashboardSlide extends React.Component {
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
    const { location, theme } = this.props;
    const { scrollY, heroHeight } = this.state;

    if (!location.weather) {
      return null;
    }

    return (
      <Box flex={1} position="relative">
        <StatusBar barStyle={theme.statusBarMain} />
        <DashboardBackground iconKey={R.path(['weather', 'currently', 'icon'], location)} />
        <Box
          position={heroHeight ? 'absolute' : 'relative'}
          width="100%"
          pt={4}
          onLayout={this.affixHero}
        >
          <DashboardHero
            opacity={heroHeight ? 1 - (scrollY / (heroHeight / 3)) : 1}
            location={location}
          />
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
            <Alert weather={location.weather} />
            <Hourly weather={location.weather} />
            <LongTerm weather={location.weather} />
          </Box>
        </ScrollBox>
      </Box>
    );
  }
}

DashboardSlide.propTypes = {
  location: PropTypes.shape({
    weather: PropTypes.shape({ currently: PropTypes.object }).isRequired,
  }).isRequired,
  theme: PropTypes.shape({ statusBarMain: PropTypes.string }).isRequired,
};

export default withTheme(DashboardSlide);
