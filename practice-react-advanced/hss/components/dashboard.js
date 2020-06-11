import React from 'react';
import Footer from './footer';
import UserDetails from './user-details';
import Homescope from './homescope';


export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="mainSection">
          <div className="myHomescope">
            {/* <section className="savedHomes"> </section> */}
            <Homescope />
            {/* <section className="agents">
            </section> */}
            {/* <Agents /> */}
          </div>
          {/* <section className="myDetails"> </section> */}
          <UserDetails />
        </div>
        <Footer />
      </div>
    );
  }
}
