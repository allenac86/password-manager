const { Account } = require('../models/Model');
const asyncHandler = require('../middleware/asyncHandler');
const jwt = require('jsonwebtoken');
const { createCustomError } = require('../errors/CustomError');

// GET all accounts
const getAllAccounts = asyncHandler(async (req, res) => {
	const token = req.headers['authorization'].split(' ')[1];

	if (!token) res.status(400).send('token not present');

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) res.status(403).send('invalid token');
	});

	const accounts = await Account.find({});
	res.status(200).json({ numAccounts: accounts.length, accounts });
});

// POST new account
const createAccount = asyncHandler(async (req, res) => {
	const token = req.headers['authorization'].split(' ')[1];
	const { url, username, password } = req.body;

	if (!token) res.status(400).send('token not present');

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) res.status(403).send('invalid token');
	});

	if (password.length > 20 || password.length < 12) {
		res.status(400).send('password must be between 12 and 20 characters');
	}

	const account = await Account.create({
		url,
		username,
		password,
	});

	res.status(201).json({ msg: 'Account created', account });
});

// GET single account by id
const getAccountById = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const token = req.headers['authorization'].split(' ')[1];

	if (!token) res.status(400).send('token not present');

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) res.status(403).send('invalid token');
	});

	const account = await Account.findOne({ _id: id });

	if (!account) {
		return next(createCustomError(`no account found with id: ${id}`, 404));
	}

	res.status(200).json({ account });
});

// PATCH single account by id
// update the provided properties and leaves the rest alone
const updateAccount = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const token = req.headers['authorization'].split(' ')[1];

	if (!token) res.status(400).send('token not present');

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) res.status(403).send('invalid token');
	});

	const account = await Account.findOneAndUpdate({ _id: id }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!account) {
		return next(createCustomError(`no account found with id: ${id}`, 404));
	}

	res.status(200).json({ account });
});

// DELETE single account by id
const deleteAccount = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const token = req.headers['authorization'].split(' ')[1];

	if (!token) res.status(400).send('token not present');

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) res.status(403).send('invalid token');
	});

	const account = await Account.findOneAndDelete({ _id: id });

	if (!account) {
		return next(createCustomError(`No account found with id: ${id}`, 404));
	}

	res.status(200).json({ message: 'account deleted', account });
});

module.exports = {
	getAllAccounts,
	createAccount,
	getAccountById,
	updateAccount,
	deleteAccount,
};
