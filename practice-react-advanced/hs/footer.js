import React from 'react';
import { CardDeck, Card } from 'react-bootstrap'

export default class Footer extends React.Component {
  render() {
    return (
      // <div className="footer">
      //   <div className="footerSections">
      //     <img src= "images/footerImg1.jpeg " alt="image1" className="imgstyle"/>
      //     {/* Get Your home ready for summer */}
      //   </div>
      //   <div className="footerSections">
      //    Find your next home with a virtual tour
      //   </div>
      //   <div className="footerSections">
      //     Don't let COVID-19 scare you from buying your dream home
      //   </div>
      //   <div className="footerSections">
      //     Debt - is it really a four letter word
      //   </div>
      // </div>
      <div className="footer">

        <CardDeck className="mb-4 mx-4">
          <Card className="footerSections">
            <Card.Img variant="top" src="images/footerImg1.jpeg" className="footerImgStyle" />
            <Card.Body className="bg-light h-20">
              <Card.Text>
                Find your next home with a virtual tour
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…
            </Card.Text>
            </Card.Body>
          </Card>

          <Card className="footerSections">
            <Card.Img variant="top" src="images/footerImg2.jpeg" />
            <Card.Body className="bg-light h-20">
              <Card.Text>
                Get Your home ready for summer
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…
            </Card.Text>
            </Card.Body>
          </Card>

          <Card className="footerSections">
            <Card.Img variant="top" src="images/footerImg3.jpeg" />
            <Card.Body className="bg-light h-20 footerTextStyle">
              <Card.Text>
                Don't let COVID-19 scare you from buying your dream home
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…
            </Card.Text>
            </Card.Body>
          </Card>

          <Card className="footerSections">
            <Card.Img variant="top" src="images/footerImg4.jpeg" />
            <Card.Body className="bg-light h-20">
              <Card.Text>
                Debt - is it really a four letter word
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…
            </Card.Text>
            </Card.Body>
          </Card>

        </CardDeck>
      </div>
    );
  }
}
