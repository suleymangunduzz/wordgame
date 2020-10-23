import React from 'react';
import { shallow } from 'enzyme';
import { NOT_STARTED, FINISHED, STARTED, MACHINE, USER } from '../../utils/constants';
import PlayerInfo from './PlayerInfo';

it('renders correctly Player Info when game is finished with machine.', () => {
  const wrapper = shallow(<PlayerInfo gameStatus={FINISHED} nextPlayer={MACHINE} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Player Info when game is finished with user.', () => {
  const wrapper = shallow(<PlayerInfo gameStatus={FINISHED} nextPlayer={USER} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Player Info when game is playing with machine.', () => {
  const wrapper = shallow(<PlayerInfo gameStatus={STARTED} nextPlayer={MACHINE} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Player Info when game is playing with user.', () => {
  const wrapper = shallow(<PlayerInfo gameStatus={STARTED} nextPlayer={USER} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Player Info when game is not started yet and player is machine.', () => {
  const wrapper = shallow(<PlayerInfo gameStatus={NOT_STARTED} nextPlayer={MACHINE} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly Player Info when game is not started yet and player is user.', () => {
  const wrapper = shallow(<PlayerInfo gameStatus={NOT_STARTED} nextPlayer={USER} />);

  expect(wrapper).toMatchSnapshot();
});
