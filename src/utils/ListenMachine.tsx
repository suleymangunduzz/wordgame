import generateAnswer from './GenerateAnswer';
import { USER, FINISHED } from './constants';

export const listenMachine = (
  isLucky: boolean,
  timeToWait: number,
  selectedNames: string[],
  names: string[],
  synthRef: any,
  setWinner: (name: string) => void,
  setTimeLeft: (timeLeft: number) => void,
  setGameStatus: (status: string) => void,
  setNextPlayer: (nextPlayer: string) => void,
  setUsersFinalAnswer: (answer: string) => void,
  setSelectedNames: (selectedNames: string[]) => void,
  isFirtTime?: boolean,
) => {
  console.log('Machine is playing...');
  setUsersFinalAnswer('');

  if (isLucky) {
    console.log('Luckily, it keeps playing...');

    console.log(`After ${timeToWait} seconds machine is gonna answer.`);

    let newSelection = '';
    let newState: string[] = [];

    if (isFirtTime) {
      newSelection = names[timeToWait];
      newState = [newSelection];
    } else {
      console.log('Generate some valid name for the machine if it is possible.');
      newSelection = generateAnswer(selectedNames, names);
      newState = [...selectedNames, newSelection];
    }

    let utter: any;

    if ('SpeechSynthesisUtterance' in window) {
      utter = new SpeechSynthesisUtterance(newSelection);
      utter.lang = 'tr-TR';
    }

    setTimeout(() => {
      if (newSelection !== '') {
        setSelectedNames(newState);
        setNextPlayer(USER);
        if (synthRef.current) {
          synthRef.current.speak(utter);
        }
        setTimeLeft(8);
      } else {
        setGameStatus(FINISHED);
        setWinner(USER);
      }
    }, timeToWait * 1000);

    clearTimeout();
  } else {
    console.log('Machine can not find a name.');
    console.log('Game is gonna finish, winner is the user.');

    setTimeout(() => {
      setGameStatus(FINISHED);
      setWinner(USER);
    }, 8000);
  }
};

export default listenMachine;
