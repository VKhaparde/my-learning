import React from 'react';

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: "red"
    };
  }
  // static getDerivedStateFromProps(props,stat){
  //   return (
  //     {favorite : props.favorite}
  //   );
  // }
  shouldComponentUpdate() {
    return true;
  }
  // componentDidMount() {
  //   setInterval(() => this.setState({ favorite: "blue" }), 1000);
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return (
      document.getElementById('snapshot').innerHTML = "My previous favorite color was " + prevState.favorite
    );
  }
  componentDidUpdate(prevProps,prevState,snapshot) {
    document.getElementById('updated').innerHTML =
    "My  favorite color now is  " + this.state.favorite +
    "  snapshot  "+snapshot ;
  }

  // handleColorChange = () => {
  //   this.setState(
  //     { favorite: "green" }
  //   );
  // }
  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favorite}</h1>
        <button onClick= {()=>{
          this.setState(
            { favorite: "green" }
          );
        }}>Click Me</button>
        <div id="snapshot"></div>
        <div id="updated"></div>
      </div>
    );
  }
}
