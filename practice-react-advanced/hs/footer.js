import React from 'react';

export default class Footer extends React.Component{
render(){
  return(
    <div className="footer">
      <div className="footerSections">
        <img src= "images/footerImg1.jpeg " alt="image1" className="imgstyle"/>
        {/* Get Your home ready for summer */}
      </div>
      <div className="footerSections">
       Find your next home with a virtual tour
      </div>
      <div className="footerSections">
        Don't let COVID-19 scare you from buying your dream home
      </div>
      <div className="footerSections">
        Debt - is it really a four letter word
      </div>
    </div>
  );
}
}
