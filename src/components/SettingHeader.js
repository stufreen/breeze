import React from 'react';
import PropTypes from 'prop-types';
import { Script } from './design-system';

const SettingHeader = ({ children }) => (
  <Script fontSize={2} color="accent" header my={2}>
    {children}
  </Script>
);

SettingHeader.defaultProps = {
  children: '',
};

SettingHeader.propTypes = {
  children: PropTypes.string,
};

export default SettingHeader;
