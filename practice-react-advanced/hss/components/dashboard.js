import React from 'react';
import Footer from './footer';
import UserDetails from './user-details';
import Homescope from './homescope';


export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="mainSection">

          <Homescope />
          <UserDetails />
        </div>
        <Footer />
      </div>
    );
  }
}
