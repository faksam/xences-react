// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import App from './';

describe('The App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should be render the application', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
