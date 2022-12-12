const express = require('express');
const router = express.Router();
const { userLogin, createUser } = require('../controllers/auth-controller');

router.route('/signup').post(createUser);
router.route('/login').post(userLogin);

module.exports = router;
