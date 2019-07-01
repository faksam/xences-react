// import libraries
import * as React from 'react';

// third-party libraries

// styles
// import './Products.scss';

// components
import { Button, Card, Col, NavItem, Row } from 'react-materialize';

// interfaces

// helper function

// fixtures
const ProductCard = (props) => {
  const { products } = props;
  return (
    <Row>
      {products.reverse().map(product => (
        <Col s={4} className="center" key={product.id} >
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
            <Button
              className="btn-flat blue white-text"
              node="a"
              href={
                `/buy/${product.category.toLowerCase().replace(/\s/g, '')
                }/${
                  product.name.toLowerCase().replace(/\s/g, '')}`
                  }>
              Buy Now
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCard;
