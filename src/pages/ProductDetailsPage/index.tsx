// import libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import './ProductDetailsPage.scss';

// components
import {
  Button,
  Card,
  Checkbox,
  Col,
  Collapsible,
  CollapsibleItem,
  Collection,
  CollectionItem,
  Row,
  Select,
  TextInput,
} from 'react-materialize';
import ProductCard from '../../components/ProductCard';

// interfaces

// helper functions

// fixtures
import { brands, colors } from '../../store/modules/brands/fixtures';
import { categories } from '../../store/modules/categories/fixtures';
import { menClothings, products } from '../../store/modules/products/fixtures';

export class ProductDetailsPage extends React.Component<{}> {
  render() {
    const product = products[1];
    return (
      <React.Fragment>
        <Row>
          <Col s={2}>
            <Row>
              <img className="right ActiveProductImgCol" src={product.pictures} />
            </Row>
            <Row>
              <img className="right ActiveProductImgCol" src={product.pictures} />
            </Row>
            <Row>
              <img className="right ActiveProductImgCol" src={product.pictures} />
            </Row>
            <Row>
              <img className="right ActiveProductImgCol" src={product.pictures} />
            </Row>
          </Col>
          <Col s={4}>
            <img className="ActiveProductImg" src={product.pictures} />
          </Col>
          <Col s={2}>
            <h5><b>{product.name}</b></h5>
            <p>{product.category}</p>
            <p>&#8358;{product.price}</p>
          </Col>
          <Col s={4} className="center">
            <Card>
              <Row>
                <Select s={3} label="Size">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </Select>
                <TextInput label="Quantity" placeholder="1" type="number" max="100" min="1" />
                <Select s={5} label="Color">
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Red">Red</option>
                </Select>
              </Row>
              <Row>
                <Button>ADD TO CART</Button>
              </Row>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ProductDetailsPage;
