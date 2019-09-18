// react libraries
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// third-party libraries
import { mount } from 'enzyme';

// components
import AccountPage from './';

// fixtures
import { users } from '../../store/modules/users/fixtures';

describe('The AccountPage component', () => {
  let wrapper;
  const props = {
    currentUser: users[0],
    match: {
      url: '/account',
      path: '/account',
    },
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <AccountPage {...props} />
      </Router>
    );
  });

  it('should be render products page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
