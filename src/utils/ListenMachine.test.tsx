import listenMachine from './ListenMachine';

const setGameStatusMock = jest.fn();
const setNextPlayerMock = jest.fn();
const setWinnerMock = jest.fn();
const setSelectedNamesMock = jest.fn();
const setTimeLeftMock = jest.fn();
const setUsersFinalAnswerMock = jest.fn();
const synthRefMock = {
  speak: jest.fn(),
};

jest.useFakeTimers();

it('should not get a valid answer, waits 8 seconds -- first round', () => {
  const selectedNames = ['hasan', 'nabi', 'ismail'];
  const names = ['ayşe', 'fatma', 'hayriye'];
  const isLucky = false;
  const isFirstTime = true;

  listenMachine(
    isLucky,
    7,
    selectedNames,
    names,
    synthRefMock,
    setWinnerMock,
    setTimeLeftMock,
    setGameStatusMock,
    setNextPlayerMock,
    setUsersFinalAnswerMock,
    setSelectedNamesMock,
    isFirstTime,
  );

  expect(setUsersFinalAnswerMock).toBeCalled();

  jest.advanceTimersByTime(8000);

  // expect(synthRefMock).toBeCalled();
  expect(setGameStatusMock).toBeCalled();
  expect(setWinnerMock).toBeCalled();
});

it('should not get a valid answer, waits 5 seconds', () => {
  const selectedNames = ['hasan', 'nabi', 'ismail'];
  const names = ['ayşe', 'fatma', 'hayriye'];
  const isLucky = false;
  const isFirstTime = false;

  listenMachine(
    isLucky,
    5,
    selectedNames,
    names,
    synthRefMock,
    setWinnerMock,
    setTimeLeftMock,
    setGameStatusMock,
    setNextPlayerMock,
    setUsersFinalAnswerMock,
    setSelectedNamesMock,
    isFirstTime,
  );

  expect(setUsersFinalAnswerMock).toBeCalled();

  jest.advanceTimersByTime(5000);

  expect(setGameStatusMock).toBeCalled();
  expect(setWinnerMock).toBeCalled();
});

it('should not get a valid answer, there is no answer', () => {
  const selectedNames = ['hasan', 'nabi', 'ismail', 'lale'];
  const names = ['hasan', 'ayşe', 'fatma', 'hayriye'];
  const isLucky = true;
  const isFirstTime = false;

  listenMachine(
    isLucky,
    4,
    selectedNames,
    names,
    synthRefMock,
    setWinnerMock,
    setTimeLeftMock,
    setGameStatusMock,
    setNextPlayerMock,
    setUsersFinalAnswerMock,
    setSelectedNamesMock,
    isFirstTime,
  );

  expect(setUsersFinalAnswerMock).toBeCalled();

  jest.advanceTimersByTime(4000);

  expect(setGameStatusMock).toBeCalled();
  expect(setWinnerMock).toBeCalled();
});

it('should get an answer correctly -- first round', () => {
  const selectedNames = ['hasan', 'nabi', 'ismail'];
  const names = ['lale', 'fatma', 'hayriye'];
  const isLucky = true;
  const isFirstTime = true;

  listenMachine(
    isLucky,
    5,
    selectedNames,
    names,
    synthRefMock,
    setWinnerMock,
    setTimeLeftMock,
    setGameStatusMock,
    setNextPlayerMock,
    setUsersFinalAnswerMock,
    setSelectedNamesMock,
    isFirstTime,
  );

  expect(setUsersFinalAnswerMock).toBeCalled();

  jest.advanceTimersByTime(5000);

  expect(setSelectedNamesMock).toBeCalled();
  expect(setNextPlayerMock).toBeCalled();
  // expect(synthRefMock.speak).toBeCalled();
  expect(setTimeLeftMock).toBeCalled();
});

it('should get an answer correctly', () => {
  const selectedNames = ['hasan', 'nabi', 'ismail'];
  const names = ['lale', 'fatma', 'hayriye'];
  const isLucky = true;
  const isFirstTime = false;

  listenMachine(
    isLucky,
    5,
    selectedNames,
    names,
    synthRefMock,
    setWinnerMock,
    setTimeLeftMock,
    setGameStatusMock,
    setNextPlayerMock,
    setUsersFinalAnswerMock,
    setSelectedNamesMock,
    isFirstTime,
  );

  expect(setUsersFinalAnswerMock).toBeCalled();

  jest.advanceTimersByTime(5000);

  expect(setSelectedNamesMock).toBeCalled();
  expect(setNextPlayerMock).toBeCalled();
  // expect(synthRefMock.speak).toBeCalled();
  expect(setTimeLeftMock).toBeCalled();
});
