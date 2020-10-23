import { renderHook } from '@testing-library/react-hooks';

import useInterval from './useInterval';
import { STARTED, NOT_STARTED, FINISHED } from './constants';

jest.useFakeTimers();

it('should call callback from 8 times', () => {
  const callback = jest.fn(() => {});

  expect(callback).not.toHaveBeenCalled();

  renderHook(() => useInterval(callback, 8, STARTED));

  jest.advanceTimersByTime(1000);

  expect(callback).toHaveBeenCalledTimes(1);

  jest.advanceTimersByTime(7000);

  expect(callback).toHaveBeenCalledTimes(8);
});

it('should not call callback when game is not started yet', () => {
  const callback = jest.fn(() => {});

  expect(callback).not.toHaveBeenCalled();

  renderHook(() => useInterval(callback, 8, NOT_STARTED));

  expect(callback).not.toHaveBeenCalled();
});

it('should not call callback when game is over', () => {
  const callback = jest.fn(() => {});

  expect(callback).not.toHaveBeenCalled();

  renderHook(() => useInterval(callback, 8, FINISHED));

  expect(callback).not.toHaveBeenCalled();
});
