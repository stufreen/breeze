import React from 'react';
import PropTypes from 'prop-types';
import { LScript } from './design-system';

const SettingHeader = ({ textKey }) => (
  <LScript fontSize={2} color="accent" header my={2} textKey={textKey} />
);

SettingHeader.propTypes = {
  textKey: PropTypes.string.isRequired,
};

export default SettingHeader;
