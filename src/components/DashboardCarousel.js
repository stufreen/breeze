import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import DashboardSlide from './DashboardSlide';

class DashboardCarousel extends React.Component {
  constructor() {
    super();
    const { width } = Dimensions.get('screen');
    this.state = {
      slideWidth: width,
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.updateWidth);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateWidth);
  }

  updateWidth = ({ screen }) => {
    this.setState({
      slideWidth: screen.width,
    });
  }

  render() {
    const {
      locations,
      currentSlide,
      setCurrentSlide,
      refreshWeather,
    } = this.props;
    const { slideWidth } = this.state;
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
        sliderWidth={slideWidth}
        itemWidth={slideWidth}
        inactiveSlideScale={1}
      />
    );
  }
}

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
