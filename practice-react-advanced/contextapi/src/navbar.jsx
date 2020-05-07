import React from 'react';

export default class  NavBar extends React.Component{
  render(){
    return (
      <div className="nav">
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
