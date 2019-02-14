import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import strings from '../localize/en.json';

const LocalizedText = ({ textKey, ...rest }) => (
  <Text {...rest}>
    { strings[textKey] !== 'undefined' ? strings[textKey] : textKey }
  </Text>
);

LocalizedText.propTypes = {
  textKey: PropTypes.string.isRequired,
};

export default LocalizedText;
