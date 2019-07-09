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
import ProductCard from '../../components/ProductCard';
import { products } from '../../store/modules/products/fixtures';

const NewArrivals = () => {
  return (
    <Row className="NewArrivals">
      <Row>
        <h4 className="center blue-text">
          NEW ARRIVALS
        </h4>
        {products.reverse().map(product => (
          <Col s={4} key={product.id} className="center">
            <ProductCard  {...{ product }} />
          </Col>
        ))}
      </Row>

    </Row>
  );
};

export default NewArrivals;
