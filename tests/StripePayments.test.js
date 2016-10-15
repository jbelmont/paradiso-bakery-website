const path = require('path');
const winston = require('winston');

// Load Environment Variables
require(path.join(__dirname,'../config/config'))["loadEnvironmentVars"];
const stripe = require("stripe")(process.env["STRIPE_API_KEY"]);

// Load fake credit card data to test stripe api.
const card = {
    card: require('./data/creditCard')["creditCard"]
};

test('Test stripe createToken api', () => {
//   stripe.tokens
//     .create(card)
//     .then(token => {
//         console.log(JSON.stringify(token));
//     })
//     .fail(err => winston.log('error', 'Database Connection Error', {error}));
});