import React from 'react';

export default class Forms extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : " ",
      essay : " ",
      choice : []
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    console.log(this.state)
    console.log("event.target.name",event.target.name);
    console.log("event.target.value",event.target.value);
    this.setState({
      [event.target.name]  :  event.target.value
    });
    // const newState = {};
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
          alert(`You have entered a name ${this.state.name} and the essay ${this.state.essay}
          and your choice of fruit is ${this.state.choice}`);
          event.preventDefault();
        }}>
          <label htmlFor="">Enter any name:
          <input type="text" name="name" id="name" value={this.state.name}
            onChange={this.handleChange}/>
          </label>
          <label htmlFor="">Write something about yourself.
           <textarea name="essay" id="" cols="30" rows="5"
           value = {this.state.essay} onChange = {this.handleChange}></textarea>
          </label>
          <label htmlFor="">Enter your choice of fruit
           <select name="choice" id="" value = {this.state.choice} onChange = {this.handleChange}
            multiple={true}>
             <option value="">Please Select</option>
             <option value="Mango">Mango</option>
             <option value="Coconut">Coconut</option>
             <option value="Pineapple">Pineapple</option>
             <option value="Watermelon">Watermelon</option>
           </select>
          </label>
          <label htmlFor="">Attending an event
          <input type="checkbox" name="attend" id="" value = {this.state.attend}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
