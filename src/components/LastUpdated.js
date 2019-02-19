import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Script } from './design-system';

const LastUpdated = ({ timestamp }) => (timestamp
  ? (
    <Script fontSize={0} color="primary" opacity={0.8} mt={2}>
      Last updated at {moment(timestamp).format('h:mm A')}
    </Script>
  )
  : null);

LastUpdated.defaultProps = {
  timestamp: null,
};

LastUpdated.propTypes = {
  timestamp: PropTypes.number,
};

export default LastUpdated;
