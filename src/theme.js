import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { connect } from 'react-redux';
import bp from './services/breakpoints';

const common = {
  fontSizes: bp([[15, 16, 17, 20, 26, 34, 50], [16, 18, 21, 25, 33, 45, 64]]),
  space: bp([[0, 4, 8, 16, 32, 64, 128], [0, 5, 10, 20, 40, 80, 160]]),
};

const wine = {
  ...common,
  colors: {
    primary: 'hsl(20, 100%, 70%)',
    translucent: 'hsla(290, 25%, 18%, 0.8)',
    secondary: '#000429',
    tertiary: 'hsl(290, 25%, 18%)',
    accent: 'rgb(255, 230, 225)',
  },
};

const electric = {
  ...common,
  colors: {
    primary: 'hsl(180, 100%, 70%)',
    translucent: 'hsla(210, 65%, 20%, 0.8)',
    secondary: 'hsl(234, 100%, 8%)',
    tertiary: 'hsl(210, 65%, 20%)',
    accent: 'rgb(255, 230, 225)',
  },
};

const themes = {
  wine,
  electric,
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
