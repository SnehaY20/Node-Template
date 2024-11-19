const express = require('express');
const router = express.Router();
const { getSamples } = require('../controllers/sample.js');


router.get('/samples', getSamples);

module.exports = router;
