'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const request = require('request');
const winston = require('winston');
const jwt = require('jsonwebtoken');

const errorHandler = require('../errorHandler');

/* Create Stripe token to be used for paradiso payments. */
router.post('/enableAdmin', function(req, res, next) {
  const admin = req.body.admin;
  const name = req.body.name;
  if (admin) {
    // sign with RSA SHA256
    const cert = fs.readFileSync(path.join(__dirname, '../ca/ca.key'));
    const token = jwt.sign({ name }, cert, { algorithm: 'RS256'});

    // sign asynchronously
    jwt.sign({ name }, cert, { algorithm: 'RS256' }, (err, token) => {
      if (err) {
        winston.log('error', 'Error Creating json web token', {err});
        res.send(err);
      }
      res.json({
        adminToken: token
      });
    });
  }
  const moduleName = 'enableAdmin';
  const error = new Error('Error signing token for admin');
  res.send(errorHandler.generateError(error, moduleName, 400));
});

module.exports = router;