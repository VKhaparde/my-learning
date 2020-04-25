import React from 'react';

export default class TemperatureCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: " "
    }
  }
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="">Enter temperature in Celsius.</label>
          <input type="text" name="" id="" onChange={(event) => {
            this.setState({
              temperature : event.target.value
            })
          }} />
        </fieldset>
        <BoilingVerdict celsius = {this.state.temperature}/>
      </div>
    );
  }
}

function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <div>Water is boiling.</div>
  }
  return <div>Water is not boiling.</div>
}
