import Calculator from '../src/calculator';

const calculator = Calculator();

test('adds two numbers', () => {
  expect(calculator.add(8, 4)).toEqual(8 + 4);
});

test('subtacts two numbers', () => {
  expect(calculator.subtract(8, 4)).toEqual(8 - 4);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(8, 4)).toEqual(8 * 4);
});

test('divides two numbers', () => {
  expect(calculator.divide(8, 4)).toEqual(8 / 4);
});
