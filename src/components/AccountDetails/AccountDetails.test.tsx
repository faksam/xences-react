// react libraries
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// third-party libraries
import { mount } from 'enzyme';

// components
import AccountDetails from './';

// fixtures
import { products } from '../../store/modules/products/fixtures';

describe('The AccountDetails component', () => {
  describe('Successful displays', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Router>
          <AccountDetails />
        </Router>
      );
    });

    it('should be render products page', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
