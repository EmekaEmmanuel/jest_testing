// const { describe } = require('node:test');
const calculator = require('./test3');
const clac = () => console.log('Calculating value...');
describe('Getting results...', () => {
  beforeEach(() => clac());

  test('add a + b', () => {
    const sum = 3 + 4;
    expect(calculator.add(3, 4)).toBe(sum);
  });

  test('substract a - b', () => {
    const sub = 7 - 3;
    expect(calculator.sub(7, 3)).toBe(sub);
  });

  test('divide a / b', () => {
    const div = 8 / 4;
    expect(calculator.div(8, 4)).toBe(div);
  });

  test('mult a * b', () => {
    const mult = 2 * 3;
    expect(calculator.mult(2, 3)).toBe(mult);
  });

});