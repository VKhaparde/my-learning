import React from 'react';
import ReactDOM from 'react-dom';

function DetermineHealthLevel(props) {
  let message;
  console.log('props', props)
  if (props.bmi === null || props.bmi === "") {
    message = ""
  }
  else if (props.bmi <= 18.5) {
    message = "Underweight!!"
  }
  else if (props.bmi >= 18.6 && props.bmi <= 24.9) {
    message = "Healthy!!"
  }
  else if (props.bmi >= 25 && props.bmi <= 29.9) {
    message = "Overweight!!"
  }
  else if (props.bmi >= 30) {
    message = "Obese!!"
  }
  else {
    message = "Please enter proper values to determine your health level";
  }
  let styles = {
    underweight: { "color": "yellow"},
    healthy : {"color" : "green"},
    overweight : {"color" : "orange"},
    obese : {"color" : "red"}
  };
  console.log('style color', styles[message.slice(0,message.length-2).toLowerCase()])
  return (
    <div>
      <h2 style={styles[message.slice(0, message.length - 2).toLowerCase()]}>{message}</h2>
    </div>
  );
}

export default class BMICalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      bmi: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    console.log("hello")
    console.log('event', event.target.value);
    const height = this.state.height / 100;
    const weight = this.state.weight;
    let newbmi = (weight / Math.pow(height, 2)).toFixed(2);
    this.setState({
      bmi: newbmi
    })
  }
  render() {
    return (
      <div style={{ "backgroundColor": "lavender" }} className="bmiClass">
        <h2>BMI Calculator</h2>
        <h3>Body Mass Index is : {this.state.bmi}</h3>
        <DetermineHealthLevel bmi={this.state.bmi} />
        <form action="" className="container" onSubmit={event => {
          event.preventDefault();
          this.handleSubmit(event);
        }}>
          <label htmlFor="">Height(cm)
          <input type="text" name="height" value={this.state.height}
              onChange={event => {
                console.log(event.target);
                this.handleChange(event);
              }} />
          </label>
          <label htmlFor="">Weight(Kg)
          <input type="text" name="weight" value={this.state.weight}
              onChange={event => {
                console.log(event.target.value);
                this.handleChange(event);
              }} />
          </label>
          <input type="submit" value="Submit" />
          <input type="button" value="Reset" onClick={() => {
            this.setState({
              height: "",
              weight: "",
              bmi: null
            })
          }} />

        </form>
      </div>
    );
  }
}
