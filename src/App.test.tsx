import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Routes from './routes';

it('contains routes', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<Routes />)).toBe(true);
});
