import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { connect } from 'react-redux';
import bp from './services/breakpoints';

const common = {
  fontSizes: bp([[15, 16, 17, 20, 26, 34, 50], [16, 17, 18, 22, 28, 37, 54]]),
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
    mainBackground: '#000429',
    settingsBackground: '#000429',
    settingsText: 'hsl(20, 100%, 70%)',
    settingsSelected: 'hsla(20, 100%, 70%, 0.2)',
    settingsUnselected: 'hsla(20, 100%, 70%, 0.1)',
    settingsButton: '#000429',
  },
  statusBarMain: 'light-content',
  statusBarSettings: 'light-content',
};

const electric = {
  ...common,
  colors: {
    primary: 'hsl(180, 100%, 70%)',
    translucent: 'hsla(210, 65%, 20%, 0.8)',
    secondary: 'hsl(234, 100%, 8%)',
    tertiary: 'hsl(210, 65%, 20%)',
    accent: 'rgb(245, 255, 255)',
    mainBackground: 'hsl(234, 100%, 8%)',
    settingsBackground: '#000429',
    settingsText: 'hsl(180, 100%, 70%)',
    settingsSelected: 'hsla(180, 100%, 70%, 0.2)',
    settingsUnselected: 'hsla(180, 100%, 70%, 0.1)',
    settingsButton: 'hsl(234, 100%, 8%)',
  },
  statusBarMain: 'light-content',
  statusBarSettings: 'light-content',
};

const splash = {
  ...common,
  colors: {
    primary: 'rgb(0, 10, 140)',
    translucent: 'rgba(255, 255, 255, 0.5)',
    secondary: 'hsl(234, 100%, 8%)',
    tertiary: 'hsl(210, 65%, 20%)',
    accent: 'rgb(0, 200, 255)',
    mainBackground: 'rgb(240, 245, 245)',
    settingsBackground: '#000429',
    settingsText: 'rgb(255, 255, 255)',
    settingsSelected: 'hsla(180, 100%, 70%, 0.2)',
    settingsUnselected: 'hsla(180, 100%, 70%, 0.1)',
    settingsButton: 'rgba(245, 245, 245, 0.9)',
  },
  statusBarMain: 'dark-content',
  statusBarSettings: 'light-content',
};

const themes = {
  wine,
  electric,
  splash,
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
