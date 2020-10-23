const generateRandomNumber = (maxNumber: number) => {
  return Math.floor(Math.random() * Math.floor(maxNumber)) + 1;
};

export default generateRandomNumber;
