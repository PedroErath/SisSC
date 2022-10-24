/* Imports */
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')

/* Get routes */
router.get('/edit', express.json(), userController.loadUser);
router.get('/list', userController.listUsers);
/* Posts routes */
router.post('/edit', express.json(), userController.editUser);
router.post('/add', express.json(), userController.addUser);
/* Delete routes */
router.delete('/delete', express.json(), userController.deleteUser);

/* Exporting routes*/
module.exports = router;