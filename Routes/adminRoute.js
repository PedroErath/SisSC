const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController')

router.get('/', adminController.AllUsers)
router.delete('/', express.json(), adminController.deleteUser)

module.exports = router;