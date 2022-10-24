/* Imports
const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController')

Get routes 
router.get('/', adminController.AllUsers);
Post routes
router.delete('/', express.json(), adminController.deleteUser);

Exporting routes
module.exports = router; */