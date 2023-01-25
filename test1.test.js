const str = require('./test1');

test('Count the characters in the string', () => {
  const string = 'microverse';
  expect(str(string)).toBe(10);
});