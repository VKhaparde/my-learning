import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './blog';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      names:["Toyota Camry","BMW","Mercerdes","Honda Odessey"]
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
    const posts = [
      { id: 1, title: "React", text: "Welcome to learning of React" },
      { id: 2, title: "Installation", text: "You can install react from npm" }
    ];
    return (
      <div style={{ color: "green"}}>
        <h1>Hello World</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <ol>
        {
          this.state.names.map((currentVal,index)=>{
              return (
                  <li key={index}>{currentVal}</li>
              );
          })
        }
        </ol>
        <Blog posts ={posts} />
      </div>
    );
  }
}
