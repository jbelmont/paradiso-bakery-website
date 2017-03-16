const path = require('path');
const winston = require('winston');

// Load Environment Variables
require(path.join(__dirname,'../config/config'))['loadEnvironmentVars'];
const stripe = require('stripe')(process.env['STRIPE_API_KEY']);

// Load fake credit card data to test stripe api.
const card = {
  card: require('./data/creditCard')['creditCard']
};

let stripeCharge = {
  charge: require('./data/chargeInfo')['charge']
};

describe('Test Stripe Api calls', () => {

  it('should return a token when calling stripe api', (done) => {
    console.log(card);
    stripe.tokens
            .create(card)
            .then(token => {
              const {id} = token;
              stripeCharge['charge']['source'] = id;
              expect(token['id']).toBeDefined();
              done();
            })
            .catch(err => {
              if (err) {
                winston.log('error', 'Stripe Token api error', {err});
                done(err);
              }
              done();
            });
  });

  it('should return a charge when calling stripe api', (done) => {
    stripe.charges.create(stripeCharge['charge'])
            .then(charge => {
              expect(charge['id']).toBeDefined();
              done();
            })
            .catch(err => {
              if (err && err.type === 'StripeCardError') {
                winston.log('error', 'Stripe Card Error', {err});
                done(err);
              }
              done(err);
            });
  });
});