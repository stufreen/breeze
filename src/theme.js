import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

const wine = {
  colors: {
    primary: 'rgb(255, 130, 100)',
    secondary: 'rgb(0, 4, 43)',
    tertiary: 'rgb(54, 31, 52)',
    accent: 'rgb(255, 230, 225)',
  },
};

const electric = {
  colors: {
    primary: 'rgb(100, 255, 255)',
    secondary: 'rgb(0, 4, 43)',
    tertiary: 'rgb(20, 35, 70)',
    accent: 'rgb(255, 255, 255)',
  },
};

const mono = {
  colors: {
    primary: 'rgb(220, 220, 220)',
    secondary: 'rgb(0, 0, 0)',
    tertiary: 'rgb(30, 30, 30)',
    accent: 'rgb(255, 255, 255)',
  },
};

const desert = {
  colors: {
    primary: 'rgb(110, 90, 75)',
    secondary: 'rgb(240, 230, 220)',
    tertiary: 'rgb(225, 210, 200)',
    accent: 'rgb(140, 120, 110)',
  },
};

const themes = {
  wine,
  electric,
  mono,
  desert,
};

const mapStateToProps = state => ({
  theme: themes[state.settings.theme],
});

const ConnectedThemeProvider = connect(mapStateToProps)(ThemeProvider);

export const getThemedProvider = Provider => ({ store, children }) => (
  <Provider store={store}>
    <ConnectedThemeProvider>
      {children}
    </ConnectedThemeProvider>
  </Provider>
);
