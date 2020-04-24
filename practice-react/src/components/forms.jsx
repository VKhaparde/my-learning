import React from 'react';

export default class Forms extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : " ",
      essay : " "
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    const newState = {};
    console.log("event.target.name",event.target.name);
    console.log("event.target.value",event.target.value);
    this.setState({
      [event.target.name]  :  event.target.value
    });
    // newState[event.target.name] = event.target.value;
    // this.setState(newState);
    // console.log('My new state',this.state);
  }
  handleSubmit(){
    console.log("this.state", this.state);
    alert(`You have entered a name ${this.state.name}`);
  }
  render(){
    return (
      <div>
        <form action="" onSubmit={(event)=>{
          console.log("event",event);
          console.log("this.state", this.state);
          alert(`You have entered a name ${this.state.name} and the essay ${this.state.essay}`);
          event.preventDefault();
        }}>
          <label htmlFor="">Enter any name: </label>
          <input type="text" name="name" id="name" value={this.state.name}
            onChange={this.handleChange} />
           <textarea name="essay" id="" cols="30" rows="10"
           value = {this.state.essay} onChange = {this.handleChange}></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
