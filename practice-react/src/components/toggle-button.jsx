import React from 'react';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      text: "OFF"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    console.log('event',event)
    this.setState({
      toggle: !this.state.toggle,
       text : this.state.toggle ? "ON" : "OFF"});
    console.log('event.target',event.target);
    event.target.style = {backgroundColor:"yellow"}
  }
  render() {
      return (
      <button onClick={this.handleClick} style = {{backgroundColor:"red"}}>{this.state.text}
        {/* { this.state.toggle ? "ON" : "OFF"} */}
      </button>
      );
  }
}
