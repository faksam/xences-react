// react libraries
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// third-party libraries
import { mount } from 'enzyme';

// components
import ProductCard from './';

// fixtures
import { products } from '../../store/modules/products/fixtures';

describe('The ProductCard component', () => {
  describe('Successful displays', () => {
    let wrapper;
    const props = {
      product: products[0],
      location: {
        pathname: '',
      },
    };

    beforeEach(() => {
      wrapper = mount(
        <Router>
          <ProductCard {...props} />
        </Router>
      );
    });

    it('should be render products page', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should click the buy now button associated to a product', () => {
      wrapper.find('Button').first().simulate('click');
      const instance = wrapper.instance() as any;

      expect(instance.history.location.pathname).toContain('/buy');
    });
  });

  describe('Unsuccessful displays', () => {
    it('should not display any product card when no product is passed', () => {
      const newProps = {
        location: {
          pathname: '',
        },
      };
      const wrapper = mount(
        <Router>
          <ProductCard {...newProps} />
        </Router>
      );
      expect(wrapper.find('Button').exists()).toBeFalsy();
    });
  });
});
