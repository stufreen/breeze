import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { LScript, Box } from './design-system';

const MultipleChoiceOption = ({ onPress, isSelected, textKey }) => (
  <TouchableOpacity onPress={onPress}>
    <Box p={3} mb="2px" position="relative">
      <Box position="absolute" bg="primary" opacity={isSelected ? 0.2 : 0.1} top={0} bottom={0} left={0} right={0} />
      <LScript fontSize={2} color={isSelected ? 'accent' : 'primary'} textKey={textKey} />
    </Box>
  </TouchableOpacity>
);

MultipleChoiceOption.defaultProps = {
  isSelected: false,
};

MultipleChoiceOption.propTypes = {
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  textKey: PropTypes.string.isRequired,
};

export default MultipleChoiceOption;
