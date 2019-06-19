import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import DashboardSlide from './DashboardSlide';
import { Box } from './design-system';
import SettingsButton from './SettingsButton';

const DashboardCarousel = ({ locations, onPressSettings, refreshWeather }) => {
  const { width } = Dimensions.get('window');
  return (
    <Box flex={1}>
      <Carousel
        style={{ flex: 1, backgroundColor: 'blue' }}
        data={locations}
        renderItem={({ item }) => (
          <DashboardSlide
            location={item}
          />
        )}
        onSnapToItem={index => refreshWeather(index)}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideScale={1}
        inactiveSlideOpacity={0.9}
      />
      <Box position="absolute" mt={4} ml={3} pt={2}>
        <SettingsButton
          onPress={onPressSettings}
        />
      </Box>
    </Box>
  );
};

DashboardCarousel.defaultProps = {
  locations: [],
};

DashboardCarousel.propTypes = {
  refreshWeather: PropTypes.func.isRequired,
  onPressSettings: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      weather: PropTypes.object,
      location: PropTypes.object,
    }),
  ),
};

export default DashboardCarousel;
