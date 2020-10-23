const getLastValidAnswerEnding = (selectedNames: string[]) => {
  const lastValidAnswer = selectedNames[selectedNames.length - 1];

  return lastValidAnswer.charAt(lastValidAnswer.length - 1);
};

export default getLastValidAnswerEnding;
