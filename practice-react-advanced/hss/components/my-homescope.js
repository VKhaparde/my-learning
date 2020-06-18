import React from 'react';


export default class MyHomeScope extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-around homescopePage">

        <div className="sidebarHomescope d-flex flex-column">
          <div className="pb-3 d-flex" style={{ color: "#a30000", fontWeight: "bold" }}>
            <div><img src="images/blue-scope.png" alt="hsIcon" className="hsIcon pr-1" /></div>
            <p>My Homescope</p>
          </div>
          <div className="pb-3 d-flex">
            <div><i className="fas fa-heart pr-1"></i></div>
            <p>Favorites</p></div>
          <div className="pb-3 d-flex">
            <div><i className="far fa-heart pr-1"></i></div>
            <p>Archive</p></div>
        </div>

        <div className="mainHomescope d-flex flex-column pl-4">
          <div className="pb-3 d-flex" style={{fontSize:"20px"}}>
            <div><img src="images/blue-scope.png" alt="hsIcon" className="hsIcon pr-1" /></div>
            <p>My Homescope</p>
          </div>
        </div>
      </div>
    );
  }
}
