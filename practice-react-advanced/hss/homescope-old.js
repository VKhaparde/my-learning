import React from 'react';

export default class Homescope extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column savedHomes">
        <div className="d-flex justify-content-between mt-2">
          <h6 className="ml-2"> MY HOMESCOPE</h6>
          <p className="text-primary mr-2">View all saved homes</p>
        </div>
        
        <div className="container-fluid savedHomeImageSection">
          <div className="row pb-4 mb-4">
            <div className="col-lg-4 col-md-4">
              <div className="card showcard">
                <img src="images/home4.jpeg" className="card-img-top imgstyle" alt="home1" />
                <div className=" card-body my-0 py-0">
                  <p className="card-text">$2,400,000 5 bed | 4 bath | 3,240 sqft
            543 Morane Blvd, Newport Beach, CA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card showcard">
                <img src="images/home2.jpeg" className="card-img-top imgstyle" alt="home2" />
                <div className=" card-body my-0 py-0">
                  <p className="card-text">$2,400,000 5 bed | 4 bath | 3,240 sqft
            543 Morane Blvd, Newport Beach, CA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card showcard">
                <img src="images/home3.jpeg" className="card-img-top imgstyle" alt="home3" />
                <div className=" card-body my-0 py-0">
                  <p className="card-text">$2,400,000 5 bed | 4 bath | 3,240 sqft
            543 Morane Blvd, Newport Beach, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
