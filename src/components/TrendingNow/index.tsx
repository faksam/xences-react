// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './TrendingNow.scss';

// components
import { Button, Card, Col, Row } from 'react-materialize';
import ProductCard from '../../components/ProductCard';

// interfaces

// helper function

// fixtures
import { trendingProducts } from '../../store/modules/products/fixtures';

const TrendingNow = () => {
  return (
    <Row className="TrendingNow">
      <Row>
        <h4 className="center blue-text">
          TRENDING NOW
        </h4>
      </Row>
      <Row>
        <Col s={8} className="center">
          <ProductCard {...{ product: trendingProducts[1], cardSize: 'm', displayProductSize: false }} />
        </Col>
        <Col s={4} className="center">
          <ProductCard {...{ product: trendingProducts[0], cardSize: 'l', displayProductSize: false }} />
        </Col>
      </Row>
      <Row>
        <Col s={4} className="center">
          <ProductCard {...{ product: trendingProducts[0], cardSize: 'l', displayProductSize: false }} />
        </Col>
        <Col s={8} className="center">
          <ProductCard {...{ product: trendingProducts[1], cardSize: 'm', displayProductSize: false }} />
        </Col>
      </Row>
    </Row>
  );
};

export default TrendingNow;
