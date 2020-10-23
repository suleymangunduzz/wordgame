import generateRandomNumber from './RandomNumberGenerator';

it('should generate random number between 1 and given number', () => {
  expect(generateRandomNumber(10)).toBeGreaterThanOrEqual(1);
  expect(generateRandomNumber(10)).toBeLessThanOrEqual(10);
});

it('should not generate random number between 1 and given number', () => {
  expect(generateRandomNumber(10)).not.toBe(35);
});
