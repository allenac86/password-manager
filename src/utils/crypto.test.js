const { encrypt, decrypt } = require('./crypto');

const testObj = {
	msg: 'Hello World!',
	date: '12/14/2022',
	name: 'test',
};

const hash = encrypt(
	JSON.stringify({
		msg: 'Hello World!',
		date: '12/14/2022',
		name: 'test',
	})
);

const stringifiedTestObj = JSON.stringify(testObj);

const decryptedString = decrypt(hash);

describe('crypto tests', () => {
	test('the encrypted test object does not match the stringified test object', () => {
		expect(hash).toEqual(expect.not.stringMatching(/JSON.stringify(testObj)/));
	});
	
	test('the decrypted hash string matches the stringified test object', () => {
		expect(stringifiedTestObj).toBe(decryptedString);
	});
});
