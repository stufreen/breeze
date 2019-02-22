import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { LScript } from './design-system';

const LastUpdated = ({ timestamp, timezone }) => (timestamp
  ? (
    <LScript
      fontSize={0}
      color="primary"
      opacity={0.8}
      mt={2}
      textKey="dashboard:lastUpdated"
      interpolation={{ time: moment(timestamp).tz(timezone).format('h:mm A') }}
    />
  ) : null);

LastUpdated.propTypes = {
  timestamp: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default LastUpdated;
