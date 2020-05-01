import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import NewExample from './new-example';
import ToggleButton from './toggle-button';
import LifeCycle from './react-lifecycle';
import LoginControl from './login-control';
import MailBox from './mailbox-inlineif';
import Page from './page-warning';
import NumberList from './list-keydemo';
import Forms from './forms';
import TemperatureCalculator from './temperatureCalc';
import FilterableProductTable from './filterableProductTable';
import BMICalculator from './bmicalc';
import Chronometer from './chronometer';




export default class App extends React.Component {
  render() {
    const messages = ["React","Angular","Vue"];
    const postsArray = [{id : 1,title :"React",text:"React is JS Library developed by FaceBook"},
                  {id:2 , title :"Angular",text:"Angular is JS Framework developed by Google"}];
    return (
      <div>
      {/* <Clock/> */}
      {/* <NewExample/> */}
      {/* <ToggleButton/>
      <LifeCycle favorite = "yellow"/>
      <LoginControl />
      <MailBox mail = {messages}/>
      <Page />
      <NumberList posts = {postsArray}/> */}
      {/* <Forms />
      <br/> */}
      {/* <TemperatureCalculator/>
      <FilterableProductTable/> */}
      <BMICalculator />
      <Chronometer/>
      </div>
   );
  }
}
