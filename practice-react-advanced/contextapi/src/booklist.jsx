import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default class BookList extends React.Component{
  static contextType = ThemeContext;
  render(){
    const {isLightTheme ,light ,dark} = this.context;
    const theme = isLightTheme ? light : dark ;
    return(
      <div className="book-list" style = {{
        backgroundColor: theme.bg ,
        color : theme.syntax
      }}>
        <ul>
          <li style={{ "background": theme.ui }}>The Socerers Stone</li>
          <li style={{ "background": theme.ui }}>The Magic Kindom</li>
          <li style={{ "background": theme.ui }}>The Sleeping Beauty and the Demon</li>
        </ul>
      </div>
    );
  }
}
