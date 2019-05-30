// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './TopContent.scss';

// components
import { Button, Carousel, Col, Collection, CollectionItem, NavItem, Row } from 'react-materialize';

// interfaces

// helper function

// fixtures
import { categories } from '../../store/modules/categories/fixtures';
import { products } from '../../store/modules/products/fixtures';

const TopContent = () => {
  const displayedCategories = categories.slice(0, 4);

  return (
    <Row>
        <Col s={4}>
          <Carousel options={{ fullWidth: true, indicators: true }}>
            {products.map(product => (
              <div key={product.id}>
                  <img className="carouselImgDiv" src={product.pictures} />
                <Button className="carousel-btn btn-flat white blue-text" node="a" href="/buynow">
                  Buy Now
                </Button>
              </div>
            ))}
          </Carousel>
        </Col>
      <Col s={2}>
        <Collection header="New Arrivals">
          {displayedCategories.map(category => (
            <CollectionItem key={category.id}>
              <NavItem href={`/new/${category.name.toLowerCase()}`} >
              {category.name}
              </NavItem>
            </CollectionItem>
          ))}
        </Collection>
      </Col>
      <Col s={2}>
        <Collection header="Trending Now">
          {displayedCategories.map(category => (
            <CollectionItem key={category.id}>
              <NavItem href={`/trending/${category.name.toLowerCase()}`} >
                {category.name}
              </NavItem>
            </CollectionItem>
          ))}
        </Collection>
      </Col>
      <Col s={4}>
        <Carousel options={{ fullWidth: true, indicators: true }}>
          {products.map(product => (
            <div key={product.id}>
                <img className="carouselImgDiv" src={product.pictures} />
              <Button className="carousel-btn btn-flat white blue-text" node="a" href="/buynow">Buy Now</Button>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default TopContent;
