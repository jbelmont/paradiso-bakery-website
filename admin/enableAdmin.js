'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');

const request = require('request');
const winston = require('winston');

/* Create Stripe token to be used for paradiso payments. */
router.post('/enableAdmin', function(req, res, next) {
    
});

module.exports = router;