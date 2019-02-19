import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Circle, Line, Path, Defs, LinearGradient, Stop, G } from 'react-native-svg';
import { withTheme } from 'styled-components/native';
import { farenheitToCelcius } from '../../services/weather';

const Chart = ({
  hours,
  width,
  height,
  theme,
}) => {
  const dotWidth = 3;
  const realHeight = height - (3 * dotWidth);
  const temps = hours.map(hour => farenheitToCelcius(hour.temperature));

  // Get the max and min temperatures
  const maxTemp = temps.reduce(
    (accumulator, item) => (item > accumulator ? item : accumulator),
  );
  const minTemp = temps.reduce(
    (accumulator, item) => (item < accumulator ? item : accumulator),
  );

  // Calculate unit size in pixels
  const xUnit = width / hours.length;
  const yUnit = realHeight / (maxTemp - minTemp);

  // Some helper functions
  const convertX = xVal => (xVal * xUnit) + (xUnit / 2);
  const convertY = yVal => (realHeight - ((yVal - minTemp) * yUnit)) + (dotWidth * 1.5);

  const path = temps.reduce((pathString, temp, index) => {
    return `${pathString} L${convertX(index)} ${convertY(temp)}`;
  }, '');

  return (
    <Svg width={width} height={height}>
      <Defs>
        <LinearGradient id="hour-chart-grad" x1="0" y1="0" x2="0" y2="100%">
          <Stop offset="0" stopColor={theme.colors.primary} stopOpacity="0.3" />
          <Stop offset="1" stopColor={theme.colors.primary} stopOpacity="0.1" />
        </LinearGradient>
      </Defs>
      <Path
        d={`M ${convertX(0)} ${convertY(minTemp)}${path} M${convertX(temps.length - 1)} ${convertY(minTemp)}`}
        fill="url(#hour-chart-grad)"
      />
      {
        temps.map((item, index) => {
          if (index === temps.length - 1) {
            return null;
          }
          return (
            <Line
              x1={convertX(index)}
              x2={convertX(index + 1)}
              y1={convertY(item)}
              y2={convertY(temps[index + 1])}
              stroke={theme.colors.primary}
              strokeWidth="2"
              key={`${hours[index].time}_${hours[index + 1].time}`}
            />
          );
        })
      }
      {
        temps.map((item, index) => (
          <G>
            <Circle
              fill={theme.colors.secondary}
              stroke={theme.colors.primary}
              strokeWidth="2"
              cx={convertX(index)}
              cy={convertY(item)}
              r={dotWidth}
              key={hours[index].time}
            />
          </G>
        ))
      }
    </Svg>
  );
};

Chart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  hours: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.shape({ colors: PropTypes.object }).isRequired,
};

export default withTheme(Chart);
