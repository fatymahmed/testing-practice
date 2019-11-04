import cipher from '../src/cesar-cipher';

test('test the ceaser cipher for wrapping from z to a.', () => {
  expect(cipher('the Boyz', 2)).toEqual('vjg Dqab');
});

test('test the ceaser cipher to return punctuations.', () => {
  expect(cipher('ah!!! ,', 1)).toEqual('bi!!! ,');
});

test('test the ceaser cipher to keep character case.', () => {
  expect(cipher('Journal Book', 1)).toEqual('Kpvsobm Cppl');
});
