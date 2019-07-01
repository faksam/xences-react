// react libraries
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// third-party libraries
import { mount } from 'enzyme';

// components
import ProductDetailsPage from './';

describe('The ProductDetailsPage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <ProductDetailsPage />
      </Router>
    );
  });

  it('should be render products page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
