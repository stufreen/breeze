import React from 'react';
import Sun from './Sun';
import Moon from './Moon';
import CloudHail from './Cloud-Hail';
import CloudMoon from './Cloud-Moon';
import CloudRain from './Cloud-Rain';
import CloudSnow from './Cloud-Snow';
import CloudSun from './Cloud-Sun';
import Cloud from './Cloud';
import CloudFog from './Cloud-Fog';
import Wind from './Wind';

const Climacon = ({ iconKey, ...rest }) => {
  switch (iconKey) {
    case 'clear-day':
      return <Sun {...rest} />;
    case 'clear-night':
      return <Moon {...rest} />;
    case 'rain':
      return <CloudRain {...rest} />;
    case 'snow':
      return <CloudSnow {...rest} />;
    case 'sleet':
      return <CloudHail {...rest} />;
    case 'wind':
      return <Wind {...rest} />;
    case 'fog':
      return <CloudFog {...rest} />;
    case 'cloudy':
      return <Cloud {...rest} />;
    case 'partly-cloudy-day':
      return <CloudSun {...rest} />;
    case 'partly-cloudy-night':
      return <CloudMoon {...rest} />;
    default:
      return <Sun {...rest} />;
  }
};

export default Climacon;
