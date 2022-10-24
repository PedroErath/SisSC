/* Imports */
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController')

/* Get routes */
router.get('/verifytoken', authController.verifyToken);
/* Post routes */
router.post('/login', express.json(), authController.login);

/* Exporting routes*/
module.exports = router;