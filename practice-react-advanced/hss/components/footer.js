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
                <div className="card-body my-1 py-1 px-0">
                  <div className="footerText d-flex flex-column justify-content-start align-items-start">
                    <div className="mb-1 font-weight-bold pl-2">Get Your home ready for summer</div>
                    <div className="mb-0 pb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="card showCardFooter">
                <img src="images/footerImg2.jpeg" className="card-img-top footerImgStyle" alt="home2" />
                <div className=" card-body my-1 py-1 px-0">
                  <div className="footerText d-flex flex-column justify-content-start align-items-start">
                    <div className="mb-1 font-weight-bold pl-2">Find your next home with a virtual tour</div>
                    <div className="mb-0 pb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="card showCardFooter">
                <img src="images/footerImg3.jpeg" className="card-img-top footerImgStyle" alt="home3" />
                <div className="card-body my-1 py-1 px-0">
                  <div className="footerText d-flex flex-column justify-content-start align-items-start">
                    <div className="mb-1 font-weight-bold pl-2">Don't let COVID-19 scare you from buying your dream home</div>
                    <div className="mb-0 pb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="card showCardFooter">
                <img src="images/footerImg4.jpeg" className="card-img-top footerImgStyle" alt="home3" />
                <div className=" card-body my-1 py-1 px-0">
                  <div className="footerText d-flex flex-column justify-content-start align-items-start">
                    <div className="mb-1 font-weight-bold pl-2">Debt - is it really a four letter word</div>
                    <div className="mb-0 pb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</div>
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
