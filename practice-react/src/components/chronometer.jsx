import React from 'react';

export default class Chronometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      //boolean value if the timer is on.
      timerStart: 0,
      //time when the timer was started or the past projected start time when the timer was resumed.
      timerTime: 0
      //total time the timer has been running since start or timer has resumed
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    console.log('timerStart',this.state.timerStart);
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
    console.log('timerStart', this.state.timerStart);
    console.log('timerTime', this.state.timerTime);

  };

  stopTimer() {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  resetTimer() {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };
  render() {
    console.log("Date.now()", Date.now());
    const { timerTime } = this.state;
    console.log('timerTime', timerTime);
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch-display">
        {hours} : {minutes} : {seconds} : {centiseconds}
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}
