import React from 'react';


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
  }
  render(){
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return(
      <fieldset>
        <label htmlFor="">Enter temperature in {scale}.</label>
        <input type="text" name="" id="" onChange={(event) => {
            this.props.onTempChange(event.target.value);
        }} />
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
  handleCelsiusChange(temperature){
    this.setState({
      scale  : "celsius",
      temperature
    });
  }
  handleFahrenheitChange(temperature){
    this.setState({
      scale : "fahrenheit",
      temperature
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
