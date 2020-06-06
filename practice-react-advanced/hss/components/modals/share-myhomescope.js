import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ShareMyHomeScope extends React.Component {
  render() {
    return (
      <div>
        <Modal size="lg"
          aria-labelledby="contained-modal-title-vcenter" centered
          keyboard={false} show={this.props.show} onHide={this.props.hideModal}>
          <Modal.Header>SHARE MYHOMESCOPE   </Modal.Header>
          <Modal.Body>

          </Modal.Body >
          <div className="text-center mb-3">
            <Button className="mr-3" variant="secondary" onClick={(event) => this.props.hideModal(event)}>Cancel</Button>
            <Button variant="info" className="">Share</Button>
          </div>
        </Modal>
      </div>
    );
  }
}
