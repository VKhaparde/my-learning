import React from 'react';
import Agents from './agents';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Agent2 from './agent2';

export default class Homescope extends React.Component {
  render() {
    return (
      <div className="myHomescope">
        <div className="d-flex flex-column savedHomes">
          <div className="d-flex justify-content-between mt-2">
            <p className="ml-2"> MY HOMESCOPE</p>
            <p className="text-primary mr-2">View all saved homes</p>
          </div>

          <div className="container-fluid savedHomeImageSection">
            <div className="row pb-4">
              <div className="col-lg-4 col-md-4">
                <div className="card showcard">
                  <img src="images/home4.jpeg" className="card-img-top imgstyle1" alt="home1" />
                  <div className="top-right"><i className="fas fa-heart fa-3x"></i></div>
                  <div className="homescopeText">
                    <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                      <p> 543 Morane Blvd, Newport Beach, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card showcard">
                  <img src="images/home3.jpeg" className="card-img-top imgstyle1" alt="home1" />
                  <div className="top-right"><i className="far fa-heart fa-3x"></i></div>
                  <div className="homescopeText">
                    <div><span style={{ fontSize: "0.6rem", fontWeight: "bold" }}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                      <p> 543 Morane Blvd, Newport Beach, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card showcard">
                  <img src="images/home2.jpeg" className="card-img-top imgstyle1" alt="home1" />
                  <div className="top-right"><i className="far fa-heart fa-3x"></i></div>
                  <div className="homescopeText">
                    <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                      <p> 543 Morane Blvd, Newport Beach, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-4">
              <div className="card showcard">
                <img src="images/home3.jpeg" className="card-img-top imgstyle" alt="home3" />
                <div class="top-right"><i className="far fa-heart fa-3x"></i></div>
                <div className=" card-body my-0 py-0">
                  <p className="card-text">$2,400,000 5 bed | 4 bath | 3,240 sqft
            543 Morane Blvd, Newport Beach, CA</p>
                </div>
              </div>
            </div> */}
            </div>
          </div>

        </div>
        <Router>
          <Switch>
            <Route path='/' exact
              render={() => <Agents/>} />
            <Route path="/agent2" exact render={()=> <Agent2/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}
