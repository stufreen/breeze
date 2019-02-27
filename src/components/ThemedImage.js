import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'react-native';

const ThemedImage = ({ theme, sources = {}, ...rest }) => {
  let source = sources.default;
  if (typeof sources[theme] !== 'undefined') {
    source = sources[theme];
  }
  return <Image source={source} {...rest} />;
};

ThemedImage.propTypes = {
  theme: PropTypes.string.isRequired,
  sources: PropTypes.shape({
    default: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  theme: state.settings.theme,
});

const ConnectedThemedImage = connect(mapStateToProps)(ThemedImage);

export default ConnectedThemedImage;
