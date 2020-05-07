import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';

export default class NavBar extends React.Component {
  // static contextType = ThemeContext;

  render() {
    // console.log('this.context',this.context);
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;
    return (
      <AuthContext.Consumer>{(authContext) => {
        return (
          <ThemeContext.Consumer>{(themeContext) => {
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            const { isAuthenticated, toggleAuth } = authContext;
            return (
              <div className="nav" style={{ "background": theme.bg, "color": theme.syntax }}>
                <h1>Context App</h1>
                <div onClick = {toggleAuth}>{isAuthenticated ? "Logged In" : "Logged Out"}</div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>)
          }}</ThemeContext.Consumer>
        )
      }}</AuthContext.Consumer>
    );
  }
}
