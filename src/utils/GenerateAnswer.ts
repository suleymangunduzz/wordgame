const generateAnswer = (selectedNames: string[], names: string[]) => {
  const lastValidAnswer = selectedNames[selectedNames.length - 1];

  const lastValidAnswerEndsWith = lastValidAnswer.charAt(lastValidAnswer.length - 1);

  const unusedNameList = names.filter(name => !selectedNames.includes(name));

  const newAnswer = unusedNameList.find(name => name.charAt(0) === lastValidAnswerEndsWith);

  return newAnswer || '';
};

export default generateAnswer;
