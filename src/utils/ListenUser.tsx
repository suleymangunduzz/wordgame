import checkAnswer from './CheckAnswer';

export const listenUser = (
  recognition: any,
  selectedNames: string[],
  names: string[],
  setWinner: (name: string) => void,
  setTimeLeft: (timeLeft: number) => void,
  setGameStatus: (status: string) => void,
  setNextPlayer: (nextPlayer: string) => void,
  setUsersFinalAnswer: (answer: string) => void,
  setSelectedNames: (selectedNames: string[]) => void,
) => {
  console.log("Well, it is user's turn, lets play it !");

  recognition.start();

  // eslint-disable-next-line no-param-reassign
  recognition.onresult = (event: any) => {
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const { transcript } = event.results[i][0];
      if (event.results[i].isFinal) finalTranscript += `${transcript} `;
    }
    if (event.results[0].isFinal) {
      console.log("User's answer: ", finalTranscript.toLocaleLowerCase('tr'));
      setUsersFinalAnswer(finalTranscript.toLocaleLowerCase('tr'));
      checkAnswer(
        finalTranscript.toLocaleLowerCase('tr'),
        selectedNames,
        names,
        setGameStatus,
        setNextPlayer,
        setWinner,
        setSelectedNames,
        setTimeLeft,
      );
    }
  };
};

export default listenUser;
