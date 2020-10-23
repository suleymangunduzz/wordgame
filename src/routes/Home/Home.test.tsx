import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

declare global {
  interface Global {
    navigator: any;
  }
}

const wrapper = shallow(<Home />);

it('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should start game correctly', () => {
  wrapper.find('Button').simulate('click');
});
