require('dotenv').config();
const crypto = require('crypto');
const algorithm = process.env.CRYPTO_ALGORITHM;
const secretKey = process.env.CRYPTO_SECRET_KEY;

const encrypt = text => {
	const iv = crypto.randomBytes(16);

	const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

	const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

	return {
		iv: iv.toString('hex'),
		content: encrypted.toString('hex'),
	};
};

const decrypt = hash => {
	const decipher = crypto.createDecipheriv(
		algorithm,
		secretKey,
		Buffer.from(hash.iv, 'hex')
	);

	const decrpyted = Buffer.concat([
		decipher.update(Buffer.from(hash.content, 'hex')),
		decipher.final(),
	]);

	return decrpyted.toString();
};

module.exports = {
	encrypt,
	decrypt,
};
