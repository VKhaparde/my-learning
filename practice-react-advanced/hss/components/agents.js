import React from 'react';
import { Button } from 'react-bootstrap';
import ShareMyHomeScope from './modals/share-myhomescope';

export default class Agents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      shareMyHomeScopeClicked : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShareMyHomeScopeClicked =this.handleShareMyHomeScopeClicked.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleShareMyHomeScopeClicked(){
    this.setState({
      shareMyHomeScopeClicked : true
    });
  }
  hideModal() {
    this.setState({ shareMyHomeScopeClicked: false });
  }
  render() {
    return (
      <div className="agents">
        {this.state.shareMyHomeScopeClicked && <ShareMyHomeScope
          show={this.state.shareMyHomeScopeClicked} handleShareMyHomeScopeClicked={this.handleShareMyHomeScopeClicked} hideModal={this.hideModal} />
        }
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-start pl-4 my-2">
            <div className="pl-0">MY AGENTS</div>
            <div className="pl-4">|</div>
            <div className="pl-4 text-primary">John Smith</div>
            <div className="pl-4">Grace Adeline</div>
            <div className="pl-4">Nina Johnson</div>
          </div>
          <div className="d-flex pl-4 pb-3">
            <div className="d-flex flex-column">
              <div className="">
                <img src="images/agentImg.jpeg" alt="agent1" className="agentImg pl-4"></img>
              </div>
              <div className="pl-4">Jon Smith</div>
              <div className="pl-4">Real Estate Agent</div>
              <div className="pl-4">Keller Williams</div>
            </div>
            <div className="pb-4 mt-3 d-flex flex-column justify-content-start align-items-start">
              <div className="d-flex justify-content-start pl-4">
                <div><span className="text-primary">Email: </span>johnsmith@gmail.com</div>
                <div className="pl-3"><span className="text-primary">Work: </span>(949)321-0110</div>
                <div className="pl-3"><span className="text-primary">Cell: </span>(949)324-0110</div>
              </div>
              <div className="text-primary pl-4 mt-2">Agent Ranking</div>
              <div className="pl-4 pb-1">Ranking this agent as 1 will set them as your primary agent</div>
              <div className="mb-2">
                <select value={this.state.value} className="ml-4 py-1" onChange={this.handleChange}>
                  <option value="selectValue">Select...</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">Remove from my Homescope</option>
                </select>
              </div>
              <div className="d-flex pl-4 pb-4">
                <Button variant="primary" className="buttonTextStyle">Contact my agent</Button>
                <Button variant="dark" className="ml-4 buttonTextStyle" onClick={this.handleShareMyHomeScopeClicked}>Share My Homescope</Button>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
