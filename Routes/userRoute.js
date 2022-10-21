const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userController = require('../Controllers/userController')

/* router.post('/login', express.urlencoded({extended:true}), userController.login); */
router.post('/add', express.json(), userController.addUser);

module.exports = router;