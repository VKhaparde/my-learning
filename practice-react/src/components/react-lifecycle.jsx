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
  componentDidMount() {
    setInterval(() => this.setState({ favorite: "blue" }), 1000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return (
      document.getElementById('snapshot').innerHTML = "My previous favorite color was " + prevProps.favorite
    );
  }
  componentDidUpdate() {
    document.getElementById('updated').innerHTML = "My  favorite color now is  " + this.state.favorite
  }
  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favorite}</h1>
        <div id="snapshot"></div>
        <div id="updated"></div>
      </div>
    );
  }
}
