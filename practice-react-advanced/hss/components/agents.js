import React from 'react';
import { Button } from 'react-bootstrap';
import ShareMyHomeScope from './modals/share-myhomescope';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Agents extends React.Component {
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

    const ContactAgentPopOver = (
      <Popover className="contactAgentPopover">
        <Popover.Content>
          <div style={{ fontSize: "0.6rem", textAlign: "center" }} >
            {/* <div className="topRightCloseButton" onClick={this.handlePopoverClose}><img src="images/x.png" alt="closeIcon" /></div> */}
            <button className="contactAgentPopoverButton" size="lg">Start a video call with my agent</button>
            <div>Not ready to talk?<span className="text-primary"><u> Have my agent contact me later</u></span>
            </div>
          </div>
        </Popover.Content>
      </Popover>

    );

    return (
      <div className="agents">
        {this.state.shareMyHomeScopeClicked && <ShareMyHomeScope
          show={this.state.shareMyHomeScopeClicked} handleShareMyHomeScopeClicked={this.handleShareMyHomeScopeClicked} hideModal={this.hideModal} />
        }
        <div className="d-flex flex-column">
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
                <img src="images/agentImg.jpeg" alt="agent1" className="agentImg pl-4"></img>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="pl-2"><b>John Smith</b></div>
                <div className="pl-2">Real Estate Agent</div>
                <div className="pl-2">Keller Williams</div>
              </div>
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
              <div className="d-flex pl-4">
                <OverlayTrigger trigger="click" placement="bottom" overlay={ContactAgentPopOver}  >
                  <Button variant="primary" className="buttonTextStyle" style={{ backgroundColor: "#4ea5d9" }} >Contact my agent</Button>
                </OverlayTrigger>
                <Button variant="dark" className="ml-4 buttonTextStyle" style={{ backgroundColor: "#23395b" }} onClick={this.handleShareMyHomeScopeClicked}>Share My Homescope</Button>
              </div>
            </div>

          </div>

        </div>
      </div>

    );
  }
}
