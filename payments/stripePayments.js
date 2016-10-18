'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const winston = require('winston');

const stripe = require("stripe")(process.env["STRIPE_API_KEY"]);
const card = {
    card: require(path.join(__dirname, '../tests/data/creditCard'))["creditCard"]
};

/* Create Stripe token to be used for paradiso payments. */
router.post('/createToken', (req, res, next) => {
    return stripe.tokens
        .create(card)
        .then(token => res.json(token))
        .catch(err => winston.log('error', 'Error Creating token for stripe', {err}));
});

router.post('/createPayment', (req, res, next) => {
    
});

module.exports = router;