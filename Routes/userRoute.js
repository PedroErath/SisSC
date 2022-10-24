/* Imports */
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')

/* Get routes */
router.get('/edit', express.json(), userController.loadUser);
/* Posts routes */
router.post('/edit', express.json(), userController.editUser);
router.post('/add', express.json(), userController.addUser);

/* Exporting routes*/
module.exports = router;