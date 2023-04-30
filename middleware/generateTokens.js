require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Token } = require('../models/Model');

const generateAccessToken = user => {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2m' });
};

const generateRefreshToken = async user => {
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '60m',
	});

	const savedToken = await Token.create({
		token: refreshToken,
	});

	return savedToken;
};

module.exports = {
	generateAccessToken,
	generateRefreshToken,
};
