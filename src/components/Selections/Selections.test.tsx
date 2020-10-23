import React from 'react';
import { shallow } from 'enzyme';
import { NOT_STARTED, FINISHED, STARTED } from '../../utils/constants';
import Selections from './Selections';

it('renders correctly Selections when game is finished without any selection.', () => {
  const mockState: string[] = [];
  const wrapper = shallow(<Selections gameStatus={FINISHED} selectedNames={mockState} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Selections when game is finished with some selections.', () => {
  const mockState: string[] = ['ayhan', 'nilay', 'yılmaz'];
  const wrapper = shallow(<Selections gameStatus={FINISHED} selectedNames={mockState} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Selections when game is not started.', () => {
  const mockState: string[] = [];
  const wrapper = shallow(<Selections gameStatus={NOT_STARTED} selectedNames={mockState} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Selections when game is started.', () => {
  const mockState: string[] = ['ali'];
  const wrapper = shallow(<Selections gameStatus={STARTED} selectedNames={mockState} />);

  expect(wrapper).toMatchSnapshot();
});
