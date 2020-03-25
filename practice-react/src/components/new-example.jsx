import React from 'react';
export default class NewExample extends React.Component{

  render(){
    function formatName(name) {
      return name.firstName + " " + name.lastName;
    }
    const name = {
      firstName : "Harper",
      lastName : "Perez"
    };
    const element = (
    <h1 tabIndex="100">Hello, {formatName(name)}</h1>
    );
    return element;
  }
}
