const mongoose = require('mongoose');
const getDateNow = require('../date');

const AccountSchema = new mongoose.Schema({
	url: {
		type: String,
		required: [true, 'must provide URL'],
		trim: true,
	},
	username: {
		type: String,
		required: [true, 'must provide username'],
		trim: true,
	},
	password: {
		type: String,
		required: [true, 'must provide password'],
		trim: true,
	},
	createdOn: {
		type: String,
		required: [true, 'must have created on date'],
		default: getDateNow(),
	},
});

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'must provide email'],
		trim: true,
	},
	password: {
		type: String,
		required: [true, 'must provide password'],
		trim: true,
	},
	username: {
		type: String,
		trim: true,
	},
	createdOn: {
		type: String,
		required: [true, 'must have created on date'],
		default: getDateNow(),
	},
});

const TokenSchema = new mongoose.Schema({
	token: {
		type: String,
		required: [true, 'refresh token is required'],
		trim: true,
	},
});

const Account = mongoose.model('Account', AccountSchema);
const User = mongoose.model('User', UserSchema);
const Token = mongoose.model('Token', TokenSchema);

module.exports = { Account, User, Token };
