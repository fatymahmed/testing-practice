import { capitalize, reverseString } from '../src/stringMethods';

test('capitalizes first letter of the string', () => {
  expect(capitalize('november')).toEqual('November');
});

test('reverses a string', () => {
  expect(reverseString('Javascript')).toEqual('tpircsavaJ');
});
