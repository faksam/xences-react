// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './DisplayCard.scss';

// components

// interfaces
import { DisplayCardProps } from './interfaces';

// helper functions

/**
 * Returns Display Card component
 *
 * @param {DisplayCardProps} props
 *
 * @returns {JSX} JSX
 */
const DisplayCard = (props: DisplayCardProps) => {
  const { product, type } = props;
  return (
    <div className="card hoverable">
      <div className={`card-image ${type}`}>
        <img src="./assets/images/Man_001.jpg" />
        <div className="card-content center">
          <hr />
          <p className="product-name">{product.name}</p>
          <p className="product-price">&#8358;{product.price}</p>
          <div className="row">
            <p className="chip">S</p>
            <p className="chip">M</p>
            <p className="chip">L</p>
            <p className="chip">XL</p>
            <p className="chip">XXL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
