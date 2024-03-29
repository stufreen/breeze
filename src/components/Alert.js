import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Box, Script, LScript } from './design-system';
import WarningIcon from './icons/WarningIcon';
import bp from '../services/breakpoints';

class Alert extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleOpen = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { weather } = this.props;
    const alert = weather && weather.alerts ? weather.alerts[weather.alerts.length - 1] : null;
    if (alert && (alert.severity === 'watch' || alert.severity === 'warning')) {
      return (
        <Box bg="translucent" p={3} borderRadius={3} mx={bp([3, 4])} mb={4}>
          <Box flexDirection="row" alignItems="center" mb={3}>
            <Script header color="accent" fontSize={1} mr={2}>{alert.title}</Script>
            <WarningIcon color="accent" size={16} />
          </Box>
          <Script fontSize={1} color="accent" numberOfLines={isOpen ? undefined : 4} mb={2}>{alert.description}</Script>
          <TouchableOpacity onPress={this.toggleOpen}>
            <LScript fontSize={1} header numberOfLines={4} textAlign="right" textKey={isOpen ? 'dashboard:less' : 'dashboard:more'} />
          </TouchableOpacity>
        </Box>
      );
    }
    return null;
  }
}

Alert.defaultProps = {
  weather: null,
};

Alert.propTypes = {
  weather: PropTypes.shape({
    alerts: PropTypes.array,
  }),
};

export default Alert;
