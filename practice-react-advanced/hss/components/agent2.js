import React from 'react';
import { Button } from 'react-bootstrap';
import ShareMyHomeScope from './modals/share-myhomescope';
import { Link } from 'react-router-dom';

export default class Agent2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      shareMyHomeScopeClicked: false,
      isPopoverCloseButtonClicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShareMyHomeScopeClicked = this.handleShareMyHomeScopeClicked.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleShareMyHomeScopeClicked() {
    this.setState({
      shareMyHomeScopeClicked: true
    });
  }
  handlePopoverClose() {
    this.setState({
      isPopoverCloseButtonClicked: true
    })
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
        <div className="d-flex flex-column pb-4">
          <div className="d-flex justify-content-start pl-4 my-1">
            <div className="pl-0">MY AGENTS</div>
            <div className="pl-4">|</div>
            <Link to="/">
              <div className="pl-4 text-primary">John Smith</div>
            </Link>
            <div className="pl-4">Grace Adeline</div>
            <Link to="/agent2">
              <div className="pl-4">Nina Johnson</div>
            </Link>
          </div>
          <div className="d-flex pl-4">
            <div className="d-flex flex-column">
              <div className="">
                <img src="images/agentImg4.jpeg" alt="agent1" className="agentImg pl-4 mt-4"></img>
              </div>
              <div className="d-flex flex-column align-items-center ">
                <div className="pl-2 mt-2"><b>Nina Johnson</b></div>
                <div className="pl-2">Real Estate Agent</div>
                <div className="pl-2">Keller Williams</div>
              </div>
            </div>
            <div className="pl-4 mt-4 pb-4 d-flex flex-column justify-content-start align-items-start">

            <div className="pl-4 pt-4 pb-2">This agent is no longer available</div>
              <div className="pl-4">
                <Button className="buttonTextStyle" style={{ backgroundColor: "#4ea5d9" }} > Request another agent</Button>
            </div>
            </div>

          </div>

        </div>
      </div>

    );
  }
}
