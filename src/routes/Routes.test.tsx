import React from 'react';
import { shallow } from 'enzyme';

import Routes from './Routes';

const wrapper = shallow(<Routes />);

it('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
