import listenUser from './ListenUser';

const setGameStatusMock = jest.fn();
const setNextPlayerMock = jest.fn();
const setWinnerMock = jest.fn();
const setTimeLeftMock = jest.fn();
const setUsersFinalAnswerMock = jest.fn();
const setSelectedNamesMock = jest.fn();

it('should listen user', () => {
  const selectedNames = ['hasan', 'nabi', 'ismail'];
  const names = ['ayşe', 'fatma', 'hayriye', 'lale'];
  const recognitionMock = { start: jest.fn(), onresult: jest.fn() };

  listenUser(
    recognitionMock,
    selectedNames,
    names,
    setWinnerMock,
    setTimeLeftMock,
    setGameStatusMock,
    setNextPlayerMock,
    setUsersFinalAnswerMock,
    setSelectedNamesMock,
  );

  expect(recognitionMock.start).toBeCalled();
});
