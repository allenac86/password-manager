require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateAccessToken = user => {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60m' });
};

const generateRefreshToken = user => {
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '90m',
	});

	return refreshToken;
};

module.exports = {
	generateAccessToken,
	generateRefreshToken,
};
