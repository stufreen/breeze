import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: 'rgb(255, 130, 100)',
    primaryTransparent: 'rgba(255, 130, 100, 0.2)',
    secondary: 'rgb(0, 4, 43)',
  },
};

export const getThemedProvider = Provider => props => (
  <Provider store={props.store}>
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </Provider>
);
