const Account = require('../models/Account');
const asyncHandler = require('../middleware/asyncHandler');
const generatePassword = require('../password');
const { createCustomError } = require('../errors/CustomError');

// GET all accounts
const getAllAccounts = asyncHandler(async (req, res) => {
	const accounts = await Account.find({});
	res.status(200).json({ numAccounts: accounts.length, accounts });
});

// POST new account
const createAccount = asyncHandler(async (req, res) => {
	const account = await Account.create({
		url: req.body.url,
		username: req.body.username,
		password: generatePassword(),
	});
	res.status(201).json({ msg: 'Account created', account });
});

// GET single account
const getAccount = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const account = await Account.findOne({ _id: id });

	if (!account) {
		return next(createCustomError(`no account found with id: ${id}`, 404));
	}

	res.status(200).json({ account });
});

// PATCH single account
// update the provided properties and leaves the rest alone
const updateAccount = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const account = await Account.findOneAndUpdate({ _id: id }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!account) {
		return next(createCustomError(`no account found with id: ${id}`, 404));
	}

	res.status(200).json({ account });
});

// DELETE single account
const deleteAccount = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const account = await Account.findOneAndDelete({ _id: id });

	if (!account) {
		return next(createCustomError(`No account found with id: ${id}`, 404));
	}

	res.status(200).json({ message: 'account deleted', account });
});

module.exports = {
	getAllAccounts,
	createAccount,
	getAccount,
	updateAccount,
	deleteAccount,
};
