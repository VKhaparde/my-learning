import React from 'react';
import ReactDOM from 'react-dom';

export default class BMICalculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      height : "",
      weight : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleChange(event){
  this.setState({
    [event.target.name] : event.target.value
  });
}
handleSubmit(event){
  console.log("hello")
  console.log('event',event.target.value);

}
  render(){
    return (
      <div>
        <h3>BMI Calculator</h3>
        <form action="" className="container" onSubmit={(event) => {
          this.handleSubmit(event);
        }}>
          <label htmlFor="">Height(cm)
          <input type="text" name = "height" value = {this.state.height}
                  onChange = {(event)=>{
                    console.log(event.target);
                    this.handleChange(event);
                  }}/>
          </label>
          <label htmlFor="">Weight(cm)
          <input type="text" name = "weight" value={this.state.weight}
              onChange={(event) => {
                console.log(event.target.value);
                this.handleChange(event);
                }} />
          </label>
          <input type="submit" value="Submit"/>
          <input type="button" value="Reset" onClick = {()=>{
            this.setState({
              height : "",
              weight : ""
            })
          }}/>

        </form>
      </div>
    );
  }
}
