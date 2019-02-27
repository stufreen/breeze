import React from 'react';
import { Box, LScript } from './design-system';
import ThemedImage from './ThemedImage';
import PoweredBy from './PoweredBy';

const About = () => (
  <Box py={4} textAlign="center" alignItems="center">
    <PoweredBy />
    <ThemedImage
      sources={{
        wine: require('../assets/splash-logo-gradient.png'),
        default: require('../assets/splash-logo-white.png'),
      }}
      style={{ width: 96, height: 86 }}
    />
    <LScript opacity={0.8} fontSize={0} textKey="settings:version" textAlign="center" mt={4} mb={2} />
    <LScript opacity={0.8} fontSize={0} textKey="settings:copyright" textAlign="center" />
  </Box>
);

export default About;