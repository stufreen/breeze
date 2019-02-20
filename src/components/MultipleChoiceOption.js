import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Script, Box } from './design-system';

const MultipleChoiceOption = ({ children, onPress, isSelected }) => (
  <TouchableOpacity onPress={onPress}>
    <Box p={3} mb="2px" position="relative">
      <Box position="absolute" bg="primary" opacity={isSelected ? 0.2 : 0.1} top={0} bottom={0} left={0} right={0} />
      <Script fontSize={2} color={isSelected ? 'accent' : 'primary'}>
        {children}
      </Script>
    </Box>
  </TouchableOpacity>
);

MultipleChoiceOption.defaultProps = {
  children: '',
  isSelected: false,
};

MultipleChoiceOption.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default MultipleChoiceOption;
