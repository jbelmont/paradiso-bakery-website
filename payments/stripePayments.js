const stripe = require("stripe")(process.env["STRIPE_API_KEY"]);

stripe.tokens
.create(card)
.then(token => {
    console.log(JSON.stringify(token));
})
.fail(err => winston.log('error', 'Database Connection Error', {error}));