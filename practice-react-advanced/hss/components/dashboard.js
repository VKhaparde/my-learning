import React from 'react';
import Footer from './footer';
import UserDetails from './user-details';
import Homescope from './homescope';


export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="mainSection row">
          <div className="col-8 col-md-8 col-sm-12 col-xs-12"><Homescope /></div>
          <div className="col-4 col-md-4 col-sm-12 col-xs-12"> <UserDetails /></div>

        </div>
        <Footer />
      </div>
    );
  }
}
