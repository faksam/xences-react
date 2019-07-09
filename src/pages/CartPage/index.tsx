// import libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import './CartPage.scss';

// components
import {
  Button,
  Card,
  Col,
  Icon,
  Row,
  Select,
  TextInput,
} from 'react-materialize';
import ProductCard from '../../components/ProductCard';

// interfaces

// helper functions

// fixtures
import { products } from '../../store/modules/products/fixtures';

export class CartPage extends React.Component<any, any> {
  constructor(props) {
    super(props);

    const { match } = props;
  }

  render() {
    const cartProducts = products.slice(0, 3);
    const subTotal = '6000.00';
    return (
      <React.Fragment>
        <div className="CartPage">
          <Row>
            <Col s={8}>
              {cartProducts.reverse().map(product => (
                <Row key={product.id} className="productRow">
                  <Card className="card">
                    <Row>
                      <Col s={3} className="productImgCol"><img src={product.pictures} /></Col>
                      <Col s={9}>
                          <Col s={9}>
                            <p>{product.name}</p>
                            <p className="productName">{product.description}</p>
                            <p>Red</p>
                            <p>&#8358;{product.price}</p>
                          </Col>
                          <Col s={3} className="productCo">
                            <TextInput label="Quantity" placeholder="1" type="number" max="100" min="1" />
                          </Col>
                      </Col>
                    </Row>
                  </Card>
                </Row>
              ))}
            </Col>
            <Col s={4}>
            <Card title="Order Summary">
              <Row>
              <hr />
              <p>{`SUBTOTAL: ${subTotal}`}</p>
              <p>{`SHIPPING: 500.00`}</p>
              <hr />
              <p><b>GRAND TOTAL: 6500.00</b></p>
              </Row>

              <Link className="btn" to="/checkout">GO TO CHECKOUT</Link>
            </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default CartPage;
