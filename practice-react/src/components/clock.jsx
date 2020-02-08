import React from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount(){
    this.timerId = setInterval(
      ()=>{
       this.tick()
      },1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  tick(){
    this.setState({date: new Date()})
  }
  render() {
    console.log('date',this.state.date.toLocaleTimeString());
    return (
      <div style={{ color: "green" }}>
        <h1>Hello World</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
