import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ShareMyHomeScope extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomeSelected: false,
      shareButtonclicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleShareHome = this.handleShareHome.bind(this);
  }
  handleClick(event) {
    console.log('event.target.src', event.target.alt);
    this.setState({
      isHomeSelected: !this.state.isHomeSelected
    });
  }
  handleShareHome(event) {
    this.setState({
      shareButtonClicked: true
    });
    console.log("Share button is clicked")
  }
  render() {
    if (this.state.isHomeSelected && this.state.shareButtonClicked) {
      return (
        <div>
          <Modal size="lg"
            aria-labelledby="contained-modal-title-vcenter" centered
            keyboard={false} show={this.props.show} onHide={this.props.hideModal}>
            <Modal.Header closeButton><h6>SHARE MYHOMESCOPE</h6></Modal.Header>
            <Modal.Body>
              <div className="d-flex flex-column align-items-center shareMyHomeScope">
                <div><i className="far fa-check-circle fa-5x" style={{ color:"#4ea5d9"}}></i></div>
                <h5 style={{ color: "#4ea5d9" }}>MyHomeScope homes have been sent!</h5>
                <div>
                  <p>You shared the following homes with your agent:</p>
                  <div className="container-fluid savedHomeImageSection">
                    <div className="row pb-4 mb-2">
                      <div className="col-lg-4 col-md-4">

                        <div className="card showcard">
                          <img src="images/home4.jpeg" className="card-img-top imgstyle1" alt="home1" />
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
                          <div className="homescopeText">
                            <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                               <p> 543 Morane Blvd, Newport Beach, CA</p>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="col-lg-4 col-md-4">

                        <div className="card showcard">
                          <img src="images/home6.jpeg" className="card-img-top imgstyle1" alt="home1" />
                          <div className="homescopeText">
                            <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                               <p> 543 Morane Blvd, Newport Beach, CA</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
    return (
      <div>
        <Modal size="lg"
          aria-labelledby="contained-modal-title-vcenter" centered
          keyboard={false} show={this.props.show} onHide={this.props.hideModal}>
          <Modal.Header closeButton ><h6>SHARE MYHOMESCOPE</h6></Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column shareMyHomeScope">
              <div>Select which of your saved homes you’d like to share with John Smith.</div>
              <div className="mt-2">

                <div className="container-fluid savedHomeImageSection">
                  <div className="row pb-4 mb-2">
                    <div className="col-lg-4 col-md-4">
                      <div className={this.state.isHomeSelected ? "selectedHomeToShare" : ""} onClick={this.handleClick}>
                        <div className="card showcard">
                          <img src="images/home4.jpeg" className="card-img-top imgstyle1" alt="home1" />
                          <div className="homescopeText">
                            <div><span style={{ fontSize: "0.6rem", fontWeight: "bold" }}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                               <p> 543 Morane Blvd, Newport Beach, CA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div>
                        <div className="card showcard">
                          <img src="images/home3.jpeg" className="card-img-top imgstyle1" alt="home2" />
                          <div className="homescopeText">
                            <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                              <p> 543 Morane Blvd, Newport Beach, CA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div>
                        <div className="card showcard">
                          <img src="images/home7.jpeg" className="card-img-top imgstyle1" alt="home3" />
                          <div className="homescopeText">
                            <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                            <p> 543 Morane Blvd, Newport Beach, CA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pb-4 mb-2">
                    <div className="col-lg-4 col-md-4">
                      <div>
                        <div className="card showcard">
                          <img src="images/home4.jpeg" className="card-img-top imgstyle1" alt="home1" />
                          <div className="homescopeText">
                            <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                              <p> 543 Morane Blvd, Newport Beach, CA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div>
                        <div className="card showcard">
                          <img src="images/home3.jpeg" className="card-img-top imgstyle1" alt="home1" />
                          <div className="homescopeText">
                            <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                      <p> 543 Morane Blvd, Newport Beach, CA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div>
                        <div className="card showcard">
                          <img src="images/home4.jpeg" className="card-img-top imgstyle1" alt="home1" />
                          <div className="homescopeText">
                            <div><span style={{ fontSize:"0.6rem",fontWeight:"bold"}}>$2,400,000</span> 5 bed | 4 bath | 3,240 sqft
                      <p> 543 Morane Blvd, Newport Beach, CA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </Modal.Body >
          <div className="text-center mb-3">
            <Button className="mr-3 buttonTextStyle" variant="secondary" style={{ width: "17%" }} onClick={(event) => this.props.hideModal(event)}>Cancel</Button>
            <Button variant="info" className="buttonTextStyle" style={{ backgroundColor: "#4ea5d9", width: "17%" }}
              onClick={this.handleShareHome}>Share</Button>
          </div>
        </Modal>
      </div>
    );
  }
}
