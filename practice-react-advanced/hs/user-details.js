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
        <div className="d-flex justify-content-around mt-3">
          <p className="ml-4">MY DETAILS </p>
          <div className="mr-2 text-primary" onClick ={this.handleDetailsClick}><i className="fas fa-pencil-alt"></i></div>
        </div>
        <div className="d-flex flex-column pl-2 align-items-start justify-content-center">
          <div className="py-1">Email: janedoe@gmail.com</div>
          <div className="pb-1">Phone: (949)321-0110</div>
          <div className="py-3 ml-3">HOME SHOPPER DETAILS</div>
         <div className="py-1">Budget: $950,000</div>
         <div className="py-1">Desired Location: Costa Mesa, CA</div>
         <div className="py-1">Bedrooms: 3+   Bathrooms: 2+ </div>
         <div className="py-1">Keywords:</div>
          <p> Washer/dryer hookups, yard, views, family neighborhood, quiet,
            open floorplan living room and kitchen, new appliances, long driveway</p>
        </div>
      </div>
    );
  }
}
