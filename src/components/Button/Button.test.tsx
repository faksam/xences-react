// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Button from './';

describe('The Button component', () => {
  let wrapper;
  const props = {
    name: 'Submit',
    submit: true,
    type: 'submit',
    classes: 'btn-flat blue',
  };

  beforeEach(() => {
    wrapper = mount(<Button {...props} />);
  });

  it('displays an error message if error prop is passed in', () => {
    expect(wrapper.find('button').props().name).toBe(props.name);
  });

  it('displays an error message if error prop is passed in', () => {
    delete props.submit;
    wrapper = mount(<Button { ...props } />);
    expect(wrapper.find('button').props().name).toBe(props.name);
  });
});
