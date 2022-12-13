const express = require('express');
const router = express.Router();
const {
	userLogin,
	userSignup,
	userLogout,
} = require('../controllers/auth-controller');

router.route('/signup').post(userSignup);
router.route('/login').post(userLogin);
router.route('/logout').delete(userLogout);

module.exports = router;
