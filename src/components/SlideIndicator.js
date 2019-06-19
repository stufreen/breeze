import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Box } from './design-system';

const SlideIndicator = ({ current, total }) => {
  if (total === 1) {
    return null;
  }

  const slideIndices = R.range(1, total + 1);
  return (
    <Box
      flexDirection="row"
      bg="translucent"
      borderRadius={12}
      alignItems="center"
      pl={1}
      opacity={0.7}
    >
      {slideIndices.map(index => (
        <Box
          key={index.toString()}
          width={7}
          height={7}
          mr={1}
          my={1}
          borderRadius={5}
          bg={index === current ? 'accent' : 'primary'}
        />
      ))}
    </Box>
  );
};

SlideIndicator.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}
  
export default SlideIndicator;
