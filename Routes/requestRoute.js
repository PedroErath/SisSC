/* Imports */
const express = require('express');
const router = express.Router();
const requestController = require('../Controllers/requestController');

/* Get routes */
router.get('/edit', express.json(), requestController.loadRequest);
router.get('/all', requestController.listRequest);

/* Post routes */
router.post('/add', express.json(), requestController.addRequest);
router.post('/edit', express.json(), requestController.editRequest);

/* Delete routes */
router.delete('/delete', express.json(), requestController.deleteRequest)


module.exports = router;