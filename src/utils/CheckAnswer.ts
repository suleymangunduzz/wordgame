import getLastValidAnswerEnding from './GetLastValidAnswerEnding';
import { MACHINE, FINISHED } from './constants';

export const checkAnswer = (
  answer: string,
  selectedNames: string[],
  names: string[],
  setGameStatus: (gameStatus: string) => void,
  setNextPlayer: (nextPlayer: string) => void,
  setWinner: (winner: string) => void,
  setSelectedNames: (selectedNames: string[]) => void,
  setTimeLeft: (timeLeft: number) => any,
) => {
  const cleanAnswer = answer.replace(/\s+/g, '');
  const answerStartsWith = cleanAnswer.charAt(0);

  const lastValidAnswerEndsWith = getLastValidAnswerEnding(selectedNames);

  if (selectedNames.some(name => name === cleanAnswer)) {
    console.log('The answer is used before, so the game is finishing.');
    setGameStatus(FINISHED);
    setNextPlayer(MACHINE);
    setWinner(MACHINE);
    return;
  }

  if (answerStartsWith !== lastValidAnswerEndsWith) {
    console.log('The answer does not match with the last valid answer.');
    setGameStatus(FINISHED);
    setNextPlayer(MACHINE);
    setWinner(MACHINE);
    return;
  }

  if (!names.includes(cleanAnswer)) {
    console.log('There is no name like this in our data.');
    setGameStatus(FINISHED);
    setNextPlayer(MACHINE);
    setWinner(MACHINE);
    return;
  }

  console.log('The answer is correct and added to the our list, good job, keep playing!');
  const newState: string[] = [...selectedNames, cleanAnswer];
  setSelectedNames(newState);
  setNextPlayer(MACHINE);
  setTimeLeft(8);
};

export default checkAnswer;
