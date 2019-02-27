import React from 'react';
import PropTypes from 'prop-types';
import { Script } from './Script';
import { translate } from '../../services/localization';

export class LScript extends React.Component {
  setNativeProps = (nativeProps) => {
    this.root.setNativeProps(nativeProps);
  }

  render() {
    const {
      textKey,
      interpolation,
      modifier,
    } = this.props;
    let content = translate(textKey, interpolation);
    if (modifier === 'uppercase') {
      content = content.toUpperCase();
    } else if (modifier === 'lowercase') {
      content = content.toLowerCase();
    }

    return (
      <Script ref={(component) => { this.root = component; }} {...this.props}>
        {content}
      </Script>
    );
  }
}

LScript.defaultProps = {
  interpolation: undefined,
  modifier: undefined,
};

LScript.propTypes = {
  textKey: PropTypes.string.isRequired,
  interpolation: PropTypes.shape(),
  modifier: PropTypes.string,
};
