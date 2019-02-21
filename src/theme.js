import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: 'rgb(255, 130, 100)',
    secondary: 'rgb(0, 4, 43)',
    tertiary: 'rgb(54, 31, 52)',
    accent: 'rgb(255, 230, 225)',
  },
};

export const getThemedProvider = Provider => props => (
  <Provider store={props.store}>
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </Provider>
);
