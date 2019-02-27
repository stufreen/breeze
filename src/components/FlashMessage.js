import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import { Box } from './design-system';
import CloseIcon from './icons/CloseIcon';

class FlashMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: new Animated.Value(0),
      isVisible: false,
    };
  }

  componentDidMount() {
    const { show } = this.props;
    if (show) {
      this.fadeIn();
    }
  }

  componentDidUpdate(oldProps) {
    const { show } = this.props;
    if (!oldProps.show && show) {
      this.fadeIn();
    }
  }

  fadeIn = () => {
    this.setState({
      isVisible: true,
    });
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.cubic),
      },
    ).start(() => {
      setTimeout(() => {
        this.fadeOut();
      }, 7000);
    });
  }

  fadeOut = () => {
    const { onClose } = this.props;
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: 300,
        easing: Easing.in(Easing.cubic),
      },
    ).start(() => {
      this.setState({
        isVisible: false,
      });
      if (typeof onClose !== 'undefined') {
        onClose();
      }
    });
  }

  render() {
    const { opacity, isVisible } = this.state;
    const { children } = this.props;
    if (!isVisible) {
      return null;
    }
    return (
      <Animated.View
        style={{
          opacity,
          transform: [{
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [10, 0],
            }),
          }],
        }}
      >
        <Box bg="accent" borderRadius={3} p={3} mb={4} position="relative">
          {children}
          <Box position="absolute" right={0} top={0}>
            <TouchableOpacity onPress={this.fadeOut}>
              <Box p={3}>
                <CloseIcon color="secondary" size={14} />
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
      </Animated.View>
    );
  }
}

FlashMessage.defaultProps = {
  onClose: undefined,
};

FlashMessage.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  show: PropTypes.bool.isRequired,
};

export default FlashMessage;
