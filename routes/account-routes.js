const express = require('express');
const router = express.Router();

const {
	getAllAccounts,
	createAccount,
} = require('../controllers/account-controller');

router.route('/').get(getAllAccounts).post(createAccount);
// router.route('/:id').get().patch().delete();

module.exports = router;
