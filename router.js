const express = require('express');
const router = express.Router();
const controller = require('./controllers/index');


router.post('/solve', controller.getValidBoggleWords);

module.exports = router;