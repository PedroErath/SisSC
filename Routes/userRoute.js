const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')

router.get('/edit', express.json(), userController.loadUser);
router.post('/edit', express.json(), userController.editUser);
router.post('/login', express.json(), userController.login);
router.post('/add', express.json(), userController.addUser);

module.exports = router;