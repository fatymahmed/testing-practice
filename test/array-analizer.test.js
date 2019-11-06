import Analizer from '../src/array-analizer';

test('test array analizer to return correct object properties', () => {
  const array = [1, 8, 3, 4, 2, 6];
  expect(Analizer(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
