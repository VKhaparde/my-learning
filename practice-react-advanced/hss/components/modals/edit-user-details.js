import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class EditUserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Jane Doe',
      email: 'janedoe@gmail.com',
      phone: '(949) 321-0110',
      selectedOption: 'buyHome',
      desiredLocation: 'Costa Mesa, CA',
      budget: '$950,000',
      beds: '3+',
      baths: '3+',
      sqft: '1,400+',
      desiredFeatures: 'Washer/dryer hookups, yard, views, family neighborhood, quiet, open floorpan living room and kitchen, new appliances, long driveway'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    console.log('event.target.name :', event.target.name);
    console.log('event.target.value :', event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Modal size="lg"
          aria-labelledby="contained-modal-title-vcenter" centered
          keyboard={false} show={this.props.show} className="editUserDetails">
          {/* <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">MY DETAILS</Modal.Title>
        </Modal.Header> */}
          <Modal.Body>
            <div className="d-flex flex-column">
              <form>
                <div className="d-flex flex-column mb-3">
                  <p className="m-1">MY DETAILS</p>
                  <div className="d-flex justify-content-around">
                    <div className="d-flex flex-column">
                      <label>Name</label>
                      <input type="text" name="userName" size="35" value={this.state.userName} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="d-flex flex-column">
                      <label>Email</label>
                      <input type="text" name="email" size="20" value={this.state.email} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="d-flex flex-column">
                      <label>Phone</label>
                      <input type="text" name="phone" size="20" value={this.state.phone} onChange={this.handleInputChange}></input>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column mt-1">
                  <p className='m-1'>HOME SHOPPER PREFERENCES</p>
                  <p className="m-1">I would like to...</p>
                  <div className="d-inline-flex">
                    <div className="px-2">
                      <input type="radio" name="selectedOption" value="sellHome" checked={this.state.selectedOption === "sellHome"}
                        onChange={this.handleInputChange}></input>
                      <label className="pl-2">Sell my home</label>
                    </div>
                    <div className="px-2">
                      <input type="radio" name="selectedOption" value="buyHome" checked={this.state.selectedOption === "buyHome"}
                        onChange={this.handleInputChange}></input>
                      <label className="pl-2">Buy a home</label>
                    </div>
                    <div className="px-2">
                      <input type="radio" name="selectedOption" value="rentHome" checked={this.state.selectedOption === "rentHome"}
                        onChange={this.handleInputChange}></input>
                      <label className="pl-2">Rent a home</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="d-flex flex-column">
                      <label>Desired Location</label>
                      <input type="text" name="desiredLocation" size="35" value={this.state.desiredLocation} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="d-flex flex-column">
                      <label>Budget</label>
                      <input type="text" name="budget" value={this.state.budget} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="d-flex flex-column">
                      <label>Beds</label>
                      <input type="text" name="beds" value={this.state.beds} onChange={this.handleInputChange} size="4"></input>
                    </div>
                    <div className="d-flex flex-column">
                      <label>Baths</label>
                      <input type="text" name="baths" value={this.state.baths} onChange={this.handleInputChange} size="4"></input>
                    </div>
                    <div className="d-flex flex-column">
                      <label>Sq.Ft</label>
                      <input type="text" name="sqft" value={this.state.sqft} onChange={this.handleInputChange} size="6"></input>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label className="m-1">Desired Features</label>
                    <textarea type="text" name="desiredLocation" value={this.state.desiredFeatures} onChange={this.handleInputChange} rows="8" />
                  </div>
                </div>
                <div>
                </div>
              </form>
              <div className="m-1">
                <p>I’m no longer working with an agent and do not wish to be contacted. <span className="text-danger"><u>Deactivate</u></span></p>
              </div>
            </div>
          </Modal.Body>
          <div className="text-center mb-3">
            <Button className="mr-3 buttonTextStyle" variant="secondary" style={{ width: "17%" }} onClick={(event) => this.props.hideModal(event)}>Cancel</Button>
            <Button variant="primary" className="buttonTextStyle" style={{ backgroundColor: "#4ea5d9", width: "17%" }} onClick={(event) => this.props.hideModal(event)}>Save</Button>
          </div>
        </Modal>
      </div>

    );
  }
}

export default EditUserDetails;
