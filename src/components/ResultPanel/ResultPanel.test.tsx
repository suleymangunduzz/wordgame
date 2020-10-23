import React from 'react';
import { shallow } from 'enzyme';
import { FINISHED, STARTED } from '../../utils/constants';
import ResultPanel from './ResultPanel';

it('renders correctly Result Panel when game is finished', () => {
  const mockSelectedNames: string[] = [];
  const wrapper = shallow(<ResultPanel gameStatus={FINISHED} selectedNames={mockSelectedNames} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Result Panel when game is playing but there is no name', () => {
  const mockSelectedNames: string[] = [];
  const wrapper = shallow(<ResultPanel gameStatus={STARTED} selectedNames={mockSelectedNames} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Result Panel when game is finihed with names', () => {
  const mockSelectedNames: string[] = ['ali', 'ismet', 'temel', 'lale'];
  const wrapper = shallow(<ResultPanel gameStatus={STARTED} selectedNames={mockSelectedNames} />);

  expect(wrapper).toMatchSnapshot();
});
