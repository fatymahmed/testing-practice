const capitalize = require('./capitalize');

test('capitalizes first letter of the string', () =>{
	expect(capitalize('november')).toEqual('November');
});