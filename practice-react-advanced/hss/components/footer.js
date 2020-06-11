import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">

        {/* <CardDeck className="mb-4 mx-4">
          <Card className="footerSections">
            <Card.Img variant="top" src="images/footerImg1.jpeg" className="footerImgStyle" />
            <Card.Body className="bg-light h-20">
              <Card.Text>
                Get your home ready for summer
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…
            </Card.Text>
            </Card.Body>
          </Card>

          <Card className="footerSections">
            <Card.Img variant="top" src="images/footerImg2.jpeg" />
            <Card.Body className="bg-light h-20">
              <Card.Text>
                Find your next home with a virtual tour
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

        </CardDeck> */}
        <div className="pb-2 pl-4 ml-2">reSET BLOG</div>
        <div className="container-fluid footerSection">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="card showCardFooter">
                <img src="images/footerImg1.jpeg" className="card-img-top footerImgStyle" alt="home1" />
                <div className="card-body my-1 py-1">
                  <div className="card-text">
                    <p className="mb-1 font-weight-bold">Get Your home ready for summer</p>
                    <p className="mb-0 pb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="card showCardFooter">
                <img src="images/footerImg2.jpeg" className="card-img-top footerImgStyle" alt="home2" />
                <div className=" card-body my-1 py-1">
                  <div className="card-text">
                    <p className="mb-1 font-weight-bold">Find your next home with a virtual tour</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="card showCardFooter">
                <img src="images/footerImg3.jpeg" className="card-img-top footerImgStyle" alt="home3" />
                <div className=" card-body my-1 py-1">
                  <div className="card-text">
                    <p className="mb-1 font-weight-bold">Don't let COVID-19 scare you from buying your dream home</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="card showCardFooter">
                <img src="images/footerImg4.jpeg" className="card-img-top footerImgStyle" alt="home3" />
                <div className=" card-body my- py-1">
                  <div className="card-text">
                    <p className="mb-1 font-weight-bold">Debt - is it really a four letter word</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
