import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const BigTemp = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={require('../assets/menu.png')} />
  </TouchableOpacity>
);

BigTemp.defaultProps = {
  onPress: () => {},
};

BigTemp.propTypes = {
  onPress: PropTypes.func,
};

export default BigTemp;
