import React from 'react';
import { shallow } from 'enzyme';
import { STARTED, NOT_STARTED, FINISHED } from '../../utils/constants';
import TimePanel from './TimePanel';

it('renders correctly Time Panel with time value', () => {
  const wrapper = shallow(<TimePanel timeLeft={3} gameStatus={STARTED} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Time Panel when game is not started', () => {
  const wrapper = shallow(<TimePanel timeLeft={0} gameStatus={NOT_STARTED} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Time Panel when game is finished', () => {
  const wrapper = shallow(<TimePanel timeLeft={0} gameStatus={FINISHED} />);

  expect(wrapper).toMatchSnapshot();
});
