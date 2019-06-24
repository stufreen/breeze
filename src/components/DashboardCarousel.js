import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import DashboardSlide from './DashboardSlide';

const DashboardCarousel = ({
  locations,
  currentSlide,
  setCurrentSlide,
  refreshWeather,
}) => {
  const { width } = Dimensions.get('screen');
  return (
    <Carousel
      index={currentSlide}
      onSnapToItem={(activePageIndex) => {
        setCurrentSlide(activePageIndex);
        refreshWeather(activePageIndex);
      }}
      activeAnimationType="spring"
      data={locations}
      renderItem={({ item }) => (
        <DashboardSlide
          location={item}
        />
      )}
      sliderWidth={width}
      itemWidth={width}
      inactiveSlideScale={1}
    />
  );
};

DashboardCarousel.defaultProps = {
  locations: [],
};

DashboardCarousel.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
  refreshWeather: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      weather: PropTypes.object,
      location: PropTypes.object,
    }),
  ),
};

export default DashboardCarousel;
