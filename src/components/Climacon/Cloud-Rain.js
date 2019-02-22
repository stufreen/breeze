import React from 'react';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const CloudRain = ({ color = 'white', size = 30 }) => (
  <Svg width={size} height={size} viewBox="15 15 70 70">
    <Path
      d="M63.943,64.941v-4.381c2.389-1.383,4-3.961,4-6.92c0-4.417-3.582-7.999-8-7.999
        c-1.6,0-3.082,0.48-4.333,1.291c-1.231-5.317-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998
        c0,3.55,1.551,6.728,4,8.925v4.916c-4.777-2.768-8-7.922-8-13.841c0-8.835,7.163-15.997,15.998-15.997
        c6.004,0,11.229,3.311,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.999,5.372,11.999,11.999
        C71.942,58.863,68.601,63.293,63.943,64.941z M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2
        s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z M49.945,57.641c1.104,0,2,0.895,2,2v15.998c0,1.104-0.896,2-2,2
        s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z M57.944,53.641c1.104,0,1.999,0.896,1.999,2v15.998
        c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C55.944,54.537,56.84,53.641,57.944,53.641z"
      fill={color}
    />
  </Svg>
);

CloudRain.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default CloudRain;
