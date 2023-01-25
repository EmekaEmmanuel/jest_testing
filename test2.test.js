const revCap = require('./test2');

test('reverse a string', () => {
  const str = 'made';
  expect(revCap.reverseString(str)).toBe('edam');
});

test('capitalize string', () => {
  const str = 'made';
  expect(revCap.capitalize(str)).toBe('Made');
});