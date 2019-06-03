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
    <Row>
      <Row>
        <h4 className="center blue-text">
          NEW ARRIVALS
        </h4>
      </Row>
      <ProductCard {...{ products }} />
    </Row>
  );
};

export default NewArrivals;
