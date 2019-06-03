// react libraries
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// third-party libraries
import { mount } from 'enzyme';

// components
import ProductsPage from './';

describe('The ProductsPage component', () => {
  let wrapper;
  let props = {
    location: {
      pathname: '/new',
    },
    match: {
      url: '/new',
    },
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <ProductsPage {...props} />
      </Router>
    );
  });

  it('should be render products page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be render products page for shirt sub category', () => {
    props = {
      location: {
        pathname: 'men/clothing/shirts',
      },
      match: {
        url: '/men',
      },
    };
    wrapper = mount(
      <Router>
        <ProductsPage {...props} />
      </Router>);
  });
});
