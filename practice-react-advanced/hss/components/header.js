import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (

      <Navbar bg="white" expand="lg" fixed="top" className="header">
        <div className="ml-4 pl-4 logoHolder">
          <img src="images/ssmainlogo.png" alt="setschedulelogo" className="setScheduleLogo" />
          <div className="bottomLeftLogoPart pl-4">HomeScope</div>
        </div>
        <div className='d-flex justify-content-around align-items-center ml-2'>
          <Link to="/">
            <div className="px-3 d-flex ">
              {/* <img src="images/icon-dashboard.png" alt="dIcon" className="headerIcons mr-1" /> */}
              <div><i className="far fa-chart-bar mr-1" ></i></div>
              <div>Dashboard</div>
            </div>
          </Link>
          <Link to="/myhomescope">
            <div className="px-3 d-flex">
              <img src="images/blue-scope.png" alt="hsIcon" className="headerIcons mr-1" />
              <div>MyHomeScope</div>
            </div>
          </Link>
          <Link to="/requestanagent">
            <div className="px-3 d-flex">
              <img src="images/businessman.png" alt="agentIcon" className="headerIcons mr-1" />
              <div>Request an Agent</div>
            </div>
          </Link>
          <div className="px-3">
            <button className="conciergeButton">Call My Concierge</button>
          </div>
        </div>
      </Navbar>


    )
  }
}
