// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './NewArrivals.scss';

// components
import { Button, Card, Col, Row } from 'react-materialize';

// interfaces

// helper function

// fixtures
import { products } from '../../store/modules/products/fixtures';

const NewArrivals = () => {
  return (
    <Row>
      <Row>
        <h4 className="center blue-text">
          NEW ARRIVALS
        </h4>
      </Row>
      <Row>
        {products.reverse().map(product => (
          <Col s={3} className="center" key={product.id} >
            <Card className="card hoverable">
                <img className="cardImg" src={product.pictures} />
                <hr />
                <p>{product.name}</p>
                <p> &#8358;{product.price}</p>
                <Row>
                  <p className="chip">S</p>
                  <p className="chip">M</p>
                  <p className="chip">L</p>
                  <p className="chip">XL</p>
                  <p className="chip">XXL</p>
                </Row>
              <Button className="btn-flat blue white-text" node="a" href={`/buynow/${product.id}`}>
                Buy Now
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default NewArrivals;
