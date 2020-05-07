import React, { createContext } from 'react';

const ThemeContext = React.createContext();

export default class ThemeProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee'
    },
  dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555'
    }
  }
  render() {
    return (
      <ThemeContext.Provider value = {{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }

}
