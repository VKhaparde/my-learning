import React from 'react';
import Footer from './footer';
import UserDetails from './user-details';
import Homescope from './homescope';
import Agents from './agents';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="mainSection">
          <section className="myHomescope">
            {/* <section className="savedHomes"> </section> */}
            <Homescope />
            {/* <section className="agents">
            </section> */}
            <Agents />
          </section>
          {/* <section className="myDetails"> </section> */}
          <UserDetails/>
        </div>
        <Footer />
      </div>
    );
  }
}
