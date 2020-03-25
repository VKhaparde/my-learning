import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import NewExample from './new-example';


export default class App extends React.Component {
  render() {
    return (
      <div>
      <Clock/>
      <NewExample/>
      </div>
   );
  }
}
