import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import NewExample from './new-example';
import ToggleButton from './toggle-button';
import LifeCycle from './react-lifecycle';
import LoginControl from './login-control';


export default class App extends React.Component {
  render() {
    return (
      <div>
      {/* <Clock/> */}
      {/* <NewExample/> */}
      <ToggleButton/>
      <LifeCycle favorite = "yellow"/>
      <LoginControl />
      </div>
   );
  }
}
