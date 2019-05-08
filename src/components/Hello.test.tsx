// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import { Hello } from './Hello';

describe('Hello component', () => {
  const props = {
    compiler: '',
    framework: '',
  };

  it('should be rendered properly', () => {
    const wrapper = shallow(<Hello { ...props }/>);

    expect(wrapper).toMatchSnapshot();
  });
});
