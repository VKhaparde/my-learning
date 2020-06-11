import React from 'react';
import EditUserDetails from './modals/edit-user-details';


export default class UserDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editDetailsClicked : false
    };
    this.handleDetailsClick =this.handleDetailsClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  handleDetailsClick(){
    this.setState({editDetailsClicked:true});
    console.log('Got clicked');
  }
  hideModal() {
    this.setState({ editDetailsClicked: false });
  }

  render() {
    return (
      <div className="myDetails">
        {this.state.editDetailsClicked && <EditUserDetails
        show = {this.state.editDetailsClicked} handleDetailsClick={this.handleDetailsClick} hideModal={this.hideModal} />
        }
        <div className="d-flex justify-content-between mt-3 py-2">
          <div className="ml-2">MY DETAILS </div>
          <div className="mr-4 text-primary" onClick ={this.handleDetailsClick}><i className="fas fa-pencil-alt"></i></div>
        </div>
        <div className="d-flex flex-column pl-2 align-items-start justify-content-center">
          <div className="py-1"><span className="text-primary">Email: </span>janedoe@gmail.com</div>
          <div className="pb-1"><span className="text-primary">Phone: </span>(949)321-0110</div>
          <div className="py-3 ">HOME SHOPPER DETAILS</div>
          <div className="py-1"><span className="text-primary">Budget: </span>$950,000</div>
          <div className="py-1"><span className="text-primary">Desired Location: </span>Costa Mesa, CA</div>
          <div className="py-1"><span className="text-primary">Bedrooms: </span> 3+ <span className="text-primary">Bathrooms: </span>2+ </div>
          <div className="py-1"><span className="text-primary">Keywords:</span></div>
          <p className="py-1 m-1 px-0"> Washer/dryer hookups, yard, views, family neighborhood, quiet,
            open floorplan living room and kitchen, new appliances, long driveway</p>
        </div>
      </div>
    );
  }
}
