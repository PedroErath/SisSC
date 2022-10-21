const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')

router.post('/login', express.json(), userController.login);
router.post('/add', express.json(), userController.addUser);

module.exports = router;