import React from 'react';
import ReactDOM from 'react-dom';
function toCelsius(fahrenheit){
  return (fahrenheit  - 32) * 5/9 ;
}

function toFahrenheit(celsius){
  return (celsius * 9/5) + 32 ;
}

function tryConvert(temperature , convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return  " ";
  }
  const convertedValue = convert(input);
  const output = Math.round(convertedValue * 1000)/1000;
  console.log('output',output.toString())
  return output.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <div>Water is boiling.</div>
  }
  return <div>Water is not boiling.</div>
}

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.onTempChange(e.target.value);
  }
  render(){
    console.log('props',this.props)
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return(
      <fieldset>
        <label htmlFor="">Enter temperature in {scale}.</label>
        <input value = {temperature} onChange={
          this.handleChange} />
      </fieldset>
    );
  }
}

export default class TemperatureCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: " ",
      scale : "celsius"
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(temp){
    console.log("temp",temp);
    this.setState({
      temperature:temp,
      scale: "celsius"
    });
  }
  handleFahrenheitChange(temp){
    console.log("temp", temp);
    this.setState({
      temperature:temp,
      scale: "fahrenheit"

    });
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsiusTemp = scale === 'fahrenheit' ? tryConvert(temperature, toCelsius ): temperature ;
    const fahrenheitTemp = scale === 'celsius' ? tryConvert(temperature, toFahrenheit) : temperature;
    console.log('celsiusTemp',celsiusTemp);
    console.log('fahrenheitTemp',fahrenheitTemp);
    return (
      <div>
        <TemperatureInput  temperature = {celsiusTemp}
        scale = "celsius" onTempChange = {this.handleCelsiusChange}/>
        <TemperatureInput  temperature = {fahrenheitTemp}
        scale = "fahrenheit" onTempChange = {this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsiusTemp)} />
      </div>
    );
  }
}
