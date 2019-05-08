// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import DisplayCard from './';

// fixtures
import { products } from '../../store/modules/products/fixtures';

describe('The DisplayCard component', () => {
  let wrapper;
  const props = {
    product: products[0],
    type: 'normal',
  };

  beforeEach(() => {
    wrapper = mount(<DisplayCard {...props} />);
  });

  it('displays an error message if error prop is passed in', () => {
    expect(wrapper.find('.product-name').text()).toBe(props.product.name);
    expect(wrapper.find('.product-price').text()).toContain(props.product.price);
  });
});
