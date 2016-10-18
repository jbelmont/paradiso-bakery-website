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

router.post('/receivePayment', (req, res, next) => {
    const {stripeToken} = req.body;
    return stripe.charges.create({
        amount: 1000, // Amount in cents
        currency: "usd",
        source: stripeToken,
        description: "Example charge"
    })
    .then(charge => res.send(charge))
    .catch(err => winston.log('error', 'Error Creating Charge for stripe', {err}));
});

module.exports = router;