// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import HomePage from './';

describe('The HomePage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<HomePage />);
  });

  it('should be render home page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
