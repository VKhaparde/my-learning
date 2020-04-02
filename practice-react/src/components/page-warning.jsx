import React from 'react';
function Warning(props){
  if(!props.warn){
    return null;
  }
  return (
    <div style={{backgroundColor:"red"}}>Warning!!!</div>
  );
}

export default class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showWarning : true
    };
  }
  render(){
    return(
      <div>
        <Warning warn = {this.state.showWarning}/>
        <button onClick = {()=>{
          this.setState({showWarning:!this.state.showWarning});
        }}>
         { this.state.showWarning ? 'Hide' : 'Show' }
        </button>
      </div>
    );
  }
}
