import { Dimensions } from 'react-native';

const BREAK_POINTS = [480];

export default (inputs) => {
  const { width } = Dimensions.get('window');
  for (let i = 0; i < BREAK_POINTS.length; i += 1) {
    if (i > inputs.length) {
      break;
    }
    if (width < BREAK_POINTS[i]) {
      return inputs[i];
    }
  }
  return inputs[inputs.length - 1]; // Return largest value by default
};
