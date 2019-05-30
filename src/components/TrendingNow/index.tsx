// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './TrendingNow.scss';

// components
import { Button, Card, Col, Row } from 'react-materialize';

// interfaces

// helper function

const TrendingNow = () => {
  return (
    <Row>
      <Row>
        <h4 className="center blue-text">
          TRENDING NOW
        </h4>
      </Row>
      <Row>
            <Col s={8} className="center">
          <Card className="card hoverable">
              <Row>
                <img
                  className="cardImg"
                  src="https://res.cloudinary.com/faksam-soft/image/upload/v1559209414/TIMBERLAND001_elo3c3.jpg"
                />
              </Row>
            <Button className="btn-flat blue white-text" node="a" href="/buynow">Buy Now</Button>
          </Card>
        </Col>
        <Col s={4} className="center">
          <Card className="card hoverable">
              <Row>
                <img
                  className="cardImg"
                  src="https://res.cloudinary.com/faksam-soft/image/upload/v1559209414/CU2-WATCHES_pgiyoc.jpg"
                />
              </Row>
            <Button className="btn-flat blue white-text" node="a" href="/buynow">Buy Now</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col s={4} className="center">
          <Card className="card hoverable">
              <Row>
                <img
                  className="cardImg"
                  src="https://res.cloudinary.com/faksam-soft/image/upload/v1559209414/CU2-WATCHES_pgiyoc.jpg"
                />
              </Row>
            <Button className="btn-flat blue white-text" node="a" href="/buynow">Buy Now</Button>
          </Card>
        </Col>
        <Col s={8} className="center">
          <Card className="card hoverable">
              <Row>
                <img
                  className="cardImg"
                  src="https://res.cloudinary.com/faksam-soft/image/upload/v1559209414/TIMBERLAND001_elo3c3.jpg"
                />
              </Row>
            <Button className="btn-flat blue white-text" node="a" href="/buynow">Buy Now</Button>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};

export default TrendingNow;
