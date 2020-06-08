import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ShareMyHomeScope extends React.Component {
  render() {
    return (
      <div>
        <Modal size="lg"
          aria-labelledby="contained-modal-title-vcenter" centered
          keyboard={false} show={this.props.show} onHide={this.props.hideModal}>
          <Modal.Header closeButton >SHARE MYHOMESCOPE</Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column shareMyHomeScope">
              <div>Select which of your saved homes you’d like to share with John Smith.</div>
              <div className="mt-2">

                <div className="container-fluid savedHomeImageSection">
                  <div className="row pb-4 mb-4">
                    <div className="col-lg-4 col-md-4">
                      <div className="card showcard">
                        <img src="images/home4.jpeg" className="card-img-top imgstyle1" alt="home1" />
                        {/* <div className="top-right"><i className="fas fa-heart fa-3x"></i></div> */}
                        <div className="homescopeText">
                          <p><b>$2,400,000</b> 5 bed | 4 bath | 3,240 sqft
                  <p> 543 Morane Blvd, Newport Beach, CA</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card showcard">
                        <img src="images/home3.jpeg" className="card-img-top imgstyle1" alt="home1" />
                        {/* <div className="top-right"><i className="far fa-heart fa-3x"></i></div> */}
                        <div className="homescopeText">
                          <p><b>$2,400,000</b> 5 bed | 4 bath | 3,240 sqft
                  <p> 543 Morane Blvd, Newport Beach, CA</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card showcard">
                        <img src="images/home2.jpeg" className="card-img-top imgstyle1" alt="home1" />
                        {/* <div className="top-right"><i className="far fa-heart fa-3x"></i></div> */}
                        <div className="homescopeText">
                          <p><b>$2,400,000</b> 5 bed | 4 bath | 3,240 sqft
                  <p> 543 Morane Blvd, Newport Beach, CA</p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pb-4 mb-4">
                    <div className="col-lg-4 col-md-4">
                      <div className="card showcard">
                        <img src="images/home4.jpeg" className="card-img-top imgstyle1" alt="home1" />
                        {/* <div className="top-right"><i className="fas fa-heart fa-3x"></i></div> */}
                        <div className="homescopeText">
                          <p><b>$2,400,000</b> 5 bed | 4 bath | 3,240 sqft
                  <p> 543 Morane Blvd, Newport Beach, CA</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card showcard">
                        <img src="images/home3.jpeg" className="card-img-top imgstyle1" alt="home1" />
                        {/* <div className="top-right"><i className="far fa-heart fa-3x"></i></div> */}
                        <div className="homescopeText">
                          <p><b>$2,400,000</b> 5 bed | 4 bath | 3,240 sqft
                  <p> 543 Morane Blvd, Newport Beach, CA</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card showcard">
                        <img src="images/home2.jpeg" className="card-img-top imgstyle1" alt="home1" />
                        {/* <div className="top-right"><i className="far fa-heart fa-3x"></i></div> */}
                        <div className="homescopeText">
                          <p><b>$2,400,000</b> 5 bed | 4 bath | 3,240 sqft
                  <p> 543 Morane Blvd, Newport Beach, CA</p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </Modal.Body >
          <div className="text-center mb-3">
            <Button className="mr-3 buttonTextStyle" variant="secondary" style={{ width: "15% " }} onClick={(event) => this.props.hideModal(event)}>Cancel</Button>
            <Button variant="info" className="buttonTextStyle" style={{ backgroundColor: "#4ea5d9", width: "15% " }} >Share</Button>
          </div>
        </Modal>
      </div>
    );
  }
}
