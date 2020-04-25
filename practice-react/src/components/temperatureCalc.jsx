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
        <BoilingVerdict />
      </div>
    );
  }
}

function BoilingVerdict(props){
  
}
