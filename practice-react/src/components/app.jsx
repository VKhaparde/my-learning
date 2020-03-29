import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import NewExample from './new-example';
import ToggleButton from './toggle-button';
import LifeCycle from './react-lifecycle';


export default class App extends React.Component {
  render() {
    return (
      <div>
      {/* <Clock/> */}
      {/* <NewExample/> */}
      <ToggleButton/>
      <LifeCycle favorite = "yellow"/>
      </div>
   );
  }
}
