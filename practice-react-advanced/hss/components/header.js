import React from 'react';
import { Navbar } from 'react-bootstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (

        <Navbar bg="white" expand="lg" fixed="top" className="header">
          <div className="ml-3">SetSchedule HomeScope</div>
          <div className='d-flex justify-content-around align-items-center ml-2'>
            <div className="px-3"> Dashboard</div>
            <div className="px-3"> MyHomeScope</div>
            <div className="px-3"> Request an Agent</div>
            <div className="px-3">
              <button className="conciergeButton">Call My Concierge</button>
            </div>
          </div>
        </Navbar>


    )
  }
}
