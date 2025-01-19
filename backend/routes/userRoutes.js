const express = require('express');
const { registerUser } = require('../controllers/userControllers');
const { authUser, allUsers } = require('../controllers/userControllers');

const router = express.Router();

router.route('/').post(registerUser).get(allUsers)
router.post('/login', authUser)

module.exports = router;