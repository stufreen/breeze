import React from 'react';
import * as R from 'ramda';
import { Box } from './design-system';

const SlideIndicator = ({ current, total }) => {
  const slideIndices = R.range(1, total + 1);
  return (
    <Box
      flexDirection="row"
      bg="translucent"
      borderRadius={12}
      alignItems="center"
      pl={1}
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
}
  
export default SlideIndicator;
