import React from 'react';
import { Image } from 'react-native';
import { Box } from './design-system';

const Splash = () => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Image source={require('../assets/splash-logo-gradient.png')} style={{ width: 96, height: 98 }} />
  </Box>
);

export default Splash;
