// react libraries
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// third-party libraries
import { mount } from 'enzyme';

// components
import SignInForm from './';

// fixtures
import { products } from '../../store/modules/products/fixtures';

describe('The SignInForm component', () => {
  describe('Successful displays', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Router>
          <SignInForm />
        </Router>
      );
    });

    it('should be render products page', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
