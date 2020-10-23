import checkAnswer from './CheckAnswer';

const setGameStatusMock = jest.fn();
const setNextPlayerMock = jest.fn();
const setWinnerMock = jest.fn();
const setSelectedNamesMock = jest.fn();
const setTimeLeftMock = jest.fn();

it('should make machine win the game, answer is used before', () => {
  const answer = 'hasan';
  const selectedNames = ['hasan', 'nabi', 'ismail'];
  const names = ['ayşe', 'fatma', 'hayriye'];

  checkAnswer(
    answer,
    selectedNames,
    names,
    setGameStatusMock,
    setNextPlayerMock,
    setWinnerMock,
    setSelectedNamesMock,
    setTimeLeftMock,
  );

  expect(setGameStatusMock).toBeCalled();
  expect(setNextPlayerMock).toBeCalled();
  expect(setWinnerMock).toBeCalled();
});

it('should make machine win the game, asnwer is not valid', () => {
  const answer = 'adnan';
  const selectedNames = ['ayhan', 'nabi', 'ismail'];
  const names = ['ayşe', 'fatma', 'hayriye', 'lale', 'süleyman', 'cengiz', 'ziya'];

  checkAnswer(
    answer,
    selectedNames,
    names,
    setGameStatusMock,
    setNextPlayerMock,
    setWinnerMock,
    setSelectedNamesMock,
    setTimeLeftMock,
  );

  expect(setGameStatusMock).toBeCalled();
  expect(setNextPlayerMock).toBeCalled();
  expect(setWinnerMock).toBeCalled();
});

it('should make machine win the game, asnwer is in our db', () => {
  const answer = 'lale';
  const selectedNames = ['ayhan', 'nabi', 'ismail'];
  const names = ['ayşe', 'fatma', 'hayriye', 'süleyman', 'cengiz', 'ziya'];

  checkAnswer(
    answer,
    selectedNames,
    names,
    setGameStatusMock,
    setNextPlayerMock,
    setWinnerMock,
    setSelectedNamesMock,
    setTimeLeftMock,
  );

  expect(setGameStatusMock).toBeCalled();
  expect(setNextPlayerMock).toBeCalled();
  expect(setWinnerMock).toBeCalled();
});

it('should set new state and after change the next player', () => {
  const answer = 'lale';
  const selectedNames = ['ayhan', 'nabi', 'ismail'];
  const names = ['ayşe', 'fatma', 'hayriye', 'lale', 'süleyman', 'cengiz', 'ziya'];

  checkAnswer(
    answer,
    selectedNames,
    names,
    setGameStatusMock,
    setNextPlayerMock,
    setWinnerMock,
    setSelectedNamesMock,
    setTimeLeftMock,
  );

  expect(setSelectedNamesMock).toBeCalled();
  expect(setNextPlayerMock).toBeCalled();
  expect(setTimeLeftMock).toBeCalled();
});
