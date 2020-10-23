import { useEffect, useRef } from 'react';
import { STARTED } from './constants';

export default function useInterval(callback: any, counter: number, gameStatus: string) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id: any;

    const countDown = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (counter > 0 && gameStatus === STARTED) {
      id = setInterval(countDown, 1000);
      return () => clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [counter, gameStatus]);
}
