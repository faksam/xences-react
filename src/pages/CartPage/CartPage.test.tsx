// react libraries
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// third-party libraries
import { mount } from 'enzyme';

// components
import CartPage from './';

describe('The CartPage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <CartPage />
      </Router>
    );
  });

  it('should be render products page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
