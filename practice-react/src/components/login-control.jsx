import React from 'react';

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.handleClickLogIn = this.handleClickLogIn.bind(this);
    this.handleClickLogOut = this.handleClickLogOut.bind(this);
  }
  handleClickLogIn(){
    this.setState({ isLoggedIn: true });
  }
  handleClickLogOut(){
    this.setState({isLoggedIn : false});
  }
  render(){
    let isLoggedIn = this.state.isLoggedIn;
    console.log('isLoggedIn',isLoggedIn);
    let button;
    if (isLoggedIn) {
      button = <LogOutButton onClick = {this.handleClickLogOut}/>
    }
    else {
      button = <LogInButton onClick ={this.handleClickLogIn}/>
    }
    return (
      <div>
        <UserGreeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome User</h1>
  }
  else{
    return <h1>Please Log In</h1>
  }
}

function LogInButton(props){
  return <button onClick = {props.onClick}>Log In</button>
}
function LogOutButton(props){
  return <button onClick= {props.onClick}>Log Out</button>
}
