import React, { useState } from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import {
  ParallaxSwiper,
  ParallaxSwiperPage,
} from 'react-native-parallax-swiper';
import DashboardSlide from './DashboardSlide';
import { Box } from './design-system';
import SettingsButton from './SettingsButton';
import SlideIndicator from './SlideIndicator';
import DashboardBackground from './DashboardBackground';

class Carousel extends React.PureComponent {
  render() {
    const { locations, setCurrentSlide } = this.props;
    setCurrentSlide(0);
    return (
      <ParallaxSwiper
        speed={0.75}
        dividerWidth={0}
        dividerColor="black"
        onMomentumScrollEnd={activePageIndex => setCurrentSlide(activePageIndex)}
        showProgressBar={false}
      >
        {locations.map(location => (
          <ParallaxSwiperPage
            key={location.id}
            BackgroundComponent={(
              <DashboardBackground iconKey={R.path(['weather', 'currently', 'icon'], location)} />
            )}
            ForegroundComponent={(
              <DashboardSlide
                location={location}
              />
            )}
          />
        ))}
      </ParallaxSwiper>
    );
  }
}

const DashboardCarousel = ({ locations, onPressSettings }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Box flex={1}>
      <Carousel locations={locations} setCurrentSlide={setCurrentSlide} />
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
};

DashboardCarousel.defaultProps = {
  locations: [],
};

DashboardCarousel.propTypes = {
  onPressSettings: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      weather: PropTypes.object,
      location: PropTypes.object,
    }),
  ),
};

export default DashboardCarousel;
