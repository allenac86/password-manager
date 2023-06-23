const express = require('express');
const router = express.Router();

const {
	userLogin,
	userSignup,
	userLogout,
	refreshToken,
} = require('../controllers/auth-controller');

router.route('/signup').post(userSignup);
router.route('/login').post(userLogin);
router.route('/logout').delete(userLogout);
router.route('/refreshToken').post(refreshToken);

module.exports = router;
