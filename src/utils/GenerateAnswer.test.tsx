import generateAnswer from './GenerateAnswer';

it('should generate answer correctly', () => {
  const mockSelectedNames = ['süleyman', 'nilay', 'yılmaz'];
  const mockNames = ['zafer', 'hasan'];

  expect(generateAnswer(mockSelectedNames, mockNames)).toBe('zafer');
});

it('should not generate a wrong answer', () => {
  const mockSelectedNames = ['süleyman', 'nilay', 'yılmaz'];
  const mockNames = ['zafer'];

  expect(generateAnswer(mockSelectedNames, mockNames)).not.toBe('hasan');
});

it('should generate empty string as answer', () => {
  const mockSelectedNames = ['süleyman', 'nilay', 'yılmaz'];
  const mockNames = ['hasan'];

  expect(generateAnswer(mockSelectedNames, mockNames)).toBe('');
});
