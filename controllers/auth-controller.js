require('dotenv').config();
const bcrypt = require('bcrypt');
const { User, Token } = require('../models/Model');
const asyncHandler = require('../middleware/asyncHandler');
const {
	generateAccessToken,
	generateRefreshToken,
} = require('../middleware/generateTokens');

const userSignup = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (password.length > 20 || password.length < 12) {
		res.status(400).send('password must be between 12 and 20 characters');
	}

	const foundUser = await User.findOne({ email: email });

	if (foundUser) {
		res.status(403).send('user already exists');
	} else {
		const hashedPassword = await bcrypt.hash(password, 10);
		const username = email.trim().split('@')[0];
		const user = await User.create({
			email: email,
			password: hashedPassword,
			username: username,
		});

		res.status(201).json({ msg: 'User created', user });
	}
});

const userLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user) res.status(400).send('invalid email');

	if (await bcrypt.compare(password, user.password)) {
		const accessToken = generateAccessToken({ user: email });
		const refreshToken = await generateRefreshToken({ user: email });

		res.json({ accessToken, refreshToken });
	} else {
		res.status(401).send('incorrect email or password');
	}
});

const userLogout = asyncHandler(async (req, res) => {
	const foundToken = await Token.findOneAndDelete({
		token: req.body.token,
	});

	if (!foundToken) {
		res.status(400).send('token not found');
	}

	res.status(204).send('logout successful');
});

module.exports = {
	userSignup,
	userLogin,
	userLogout,
};
