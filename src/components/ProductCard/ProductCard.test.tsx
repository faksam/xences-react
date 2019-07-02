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
  let wrapper;
  const props = {
    products,
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
    wrapper.find('button').at(1).simulate('click');
    const instance = wrapper.instance() as any;

    expect(instance.history.location.pathname).toContain('/buy');
  });
});
