import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { Script } from './design-system';

const LastUpdated = ({ timestamp, timezone }) => (timestamp
  ? (
    <Script fontSize={0} color="primary" opacity={0.8} mt={2}>
      Last updated at {moment(timestamp).tz(timezone).format('h:mm A')}
    </Script>
  )
  : null);

LastUpdated.propTypes = {
  timestamp: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default LastUpdated;
