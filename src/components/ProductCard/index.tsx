// import libraries
import * as React from 'react';

// third-party libraries

// styles
// import './Products.scss';

// components
import { Button, Card, Col, Link, NavItem, Row } from 'react-materialize';
import { withRouter } from 'react-router-dom';

// interfaces
import { ProductCardProps, ProductCardState } from './interfaces';

// helper function

// fixtures

class ProductCard extends React.Component<ProductCardProps, ProductCardState> {
  constructor(props) {
    super(props);
  }

  handleBuy = product => (event) => {
    const { history } = this.props;
    event.preventDefault();
    history.push(
      `/buy/${product.category.toLowerCase().replace(/\s/g, '')
      }/${
      product.name.toLowerCase().replace(/\s/g, '')}`
    );
  }

  render() {
    const { product, cardSize, displayProductSize } = this.props;
    return (
      <Row className="product-card">
        {product ?
          <Card className={`card hoverable ${cardSize}`}>
            <img src={product.pictures} />
            <hr />
            <p>{product.name}</p>
            <p> &#8358;{product.price}</p>
            {displayProductSize ?
              <Row className="product-size">
                <p className="chip">S</p>
                <p className="chip">M</p>
                <p className="chip">L</p>
                <p className="chip">XL</p>
                <p className="chip">XXL</p>
              </Row>
              : ''
            }
            <Button className="btn-flat blue white-text" onClick={this.handleBuy(product)}>Buy Now</Button>
          </Card> : ''}
      </Row>
    );
  }
}

export default withRouter(ProductCard);
