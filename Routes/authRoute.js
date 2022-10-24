/* Imports */
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController')

router.post('/login', express.json(), authController.login);
router.get('/verifytoken', authController.verifyToken);

/* exporting routes*/
module.exports = router;