import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

const wine = {
  colors: {
    primary: 'hsl(20, 100%, 70%)',
    translucent: 'hsla(290, 25%, 18%, 0.8)',
    secondary: '#000429',
    tertiary: 'hsl(290, 25%, 18%)',
    accent: 'rgb(255, 230, 225)',
  },
};

const electric = {
  colors: {
    primary: 'hsl(180, 100%, 70%)',
    translucent: 'hsla(210, 65%, 20%, 0.8)',
    secondary: 'hsl(234, 100%, 8%)',
    tertiary: 'hsl(210, 65%, 20%)',
    accent: 'rgb(255, 230, 225)',
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

export const getThemedProvider = Provider => ({ store, children }) => ( // eslint-disable-line
  <Provider store={store}>
    <ConnectedThemeProvider>
      {children}
    </ConnectedThemeProvider>
  </Provider>
);
