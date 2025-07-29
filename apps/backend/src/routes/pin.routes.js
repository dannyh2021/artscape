const express = require('express');
const router = express.Router();
const pinController = require('../controllers/pin.controller');

router.post('/upload', pinController.createPin);

module.exports = router;