'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const winston = require('winston');

const stripe = require("stripe")(process.env["STRIPE_API_KEY"]);

/* Create Stripe token to be used for paradiso payments. */
router.post('/createToken', (req, res, next) => {
    let creditCardNumber = req.body && req.body.creditCardNumber;
    let exp_month = req.body && req.body.exp_month;
    let exp_year = req.body && req.body.exp_year;
    let cvc = req.body && req.body.cvc;
    let number = req.body && req.body.creditCardNumber;
    const creditCardInfo = {
        card: {
            exp_month: exp_month,
            exp_year: exp_year,
            cvc: cvc,
            number: creditCardNumber
        }
    };
    return stripe.tokens
        .create(creditCardInfo)
        .then(token => {
            res.json(token);
        })
        .catch(err => {
            console.log(err); 
             winston.log('error', 'Error Creating token for stripe', {err}) });
});

router.post('/receivePayment', (req, res, next) => {
    const {
        stripeToken, 
        amount
    } = req.body;
    return stripe.charges.create({
        amount,
        currency: "usd",
        source: stripeToken,
        description: "Menu Item Charge"
    })
    .then(charge => res.send(charge))
    .catch(err => winston.log('error', 'Error Creating Charge for stripe', {err}));
});

module.exports = router;