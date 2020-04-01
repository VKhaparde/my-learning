import React from 'react';

export default class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button ;
    if(isLoggedIn){
      button = <button onClick = {()=>{
        this.setState({isLoggedIn:true});
      }
      }>Log Out</button>
    }
    button = <button onClick = {()=>{
      this.setState({isLoggedIn:false})
    }}>Log In</button>
  }
}
function UserGreeting(props){

}
