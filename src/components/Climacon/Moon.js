import React from 'react';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const Moon = ({ color, size }) => (
  <Svg width={size} height={size} viewBox="20 20 60 60">
    <Path
      d="M50,61.998c-6.627,0-11.999-5.372-11.999-11.998
        c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788
        c0,4.418,3.582,7.999,8,7.999c0.615,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208
        C61.998,56.626,56.626,61.998,50,61.998z M48.212,42.208c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999
        c3.802,0,6.978-2.655,7.791-6.211C52.937,50.884,49.115,47.062,48.212,42.208z"
      fill={color}
    />
  </Svg>
);

Moon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Moon;
