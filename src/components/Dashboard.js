import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './design-system';
import SettingsButton from './SettingsButton';
import SlideIndicator from './SlideIndicator';
import { activeStateWatcher } from '../services/app-state-watcher';
import DashboardCarousel from './DashboardCarousel';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
    this.stateWatcher = null;
  }

  componentDidMount() {
    this.stateWatcher = activeStateWatcher(this.refresh);
  }

  componentWillUnmount() {
    if (this.stateWatcher !== null) {
      this.stateWatcher.destroy();
    }
  }

  refresh = () => {
    const { currentSlide } = this.state;
    const { refreshWeather, addCurrentLocation } = this.props;
    refreshWeather(currentSlide);
    addCurrentLocation();
  }

  render() {
    const { locations, onPressSettings, refreshWeather } = this.props;
    const { currentSlide } = this.state;
    return (
      <Box flex={1}>
        <DashboardCarousel
          locations={locations}
          setCurrentSlide={index => this.setState({ currentSlide: index })}
          currentSlide={currentSlide}
          refreshWeather={refreshWeather}
        />
        <Box position="absolute" right={0} mt={4} mr={3} pt={3}>
          <SlideIndicator total={locations.length} current={currentSlide + 1} />
        </Box>
        <Box position="absolute" mt={4} ml={3} pt={2}>
          <SettingsButton
            onPress={onPressSettings}
          />
        </Box>
      </Box>
    );
  }
}

Dashboard.defaultProps = {
  locations: [],
};

Dashboard.propTypes = {
  onPressSettings: PropTypes.func.isRequired,
  refreshWeather: PropTypes.func.isRequired,
  addCurrentLocation: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      weather: PropTypes.object,
      location: PropTypes.object,
    }),
  ),
};

export default Dashboard;
