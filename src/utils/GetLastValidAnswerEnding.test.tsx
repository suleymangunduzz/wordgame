import getLastValidAnswerEnding from './GetLastValidAnswerEnding';

it('should get last valid answers last char corretcly', () => {
  const mockSelectedNames = ['süleyman', 'nilay', 'yılmaz'];

  expect(getLastValidAnswerEnding(mockSelectedNames)).toBe('z');
});

it('should not enerate wrong last char', () => {
  const mockSelectedNames = ['süleyman', 'nilay', 'yılmaz'];

  expect(getLastValidAnswerEnding(mockSelectedNames)).not.toBe('s');
});
