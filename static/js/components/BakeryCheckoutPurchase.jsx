import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import {browserHistory} from 'react-router';

import store from '../store/store';

import BakeryCheckout from './BakeryCheckout';
import UserProfile from './UserProfile';

import {ajax} from '../utils/ajax.js';

import * as constants from '../constants/constants.js';

class BakeryCheckoutPurchase extends Component {

 constructor(props) {
    super(props);
    this.state = {
      amount: store.getState() && store.getState()["purchaseAmount"]["amount"]
    };
    this._makePurchase = this._makePurchase.bind(this);
    this._generateStripeToken = this._generateStripeToken.bind(this);
    this._generatePaymentPostRequest = this._generatePaymentPostRequest.bind(this);
  }

  _makePurchase(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const createTokenPostRequest = this._generateStripeToken();
    return ajax(createTokenPostRequest)
    .then(token => {
      const {id} = token;
      const createPaymentPostRequest = this._generatePaymentPostRequest(id);
      return ajax(createPaymentPostRequest)
      .then(paymentCharge => console.log(paymentCharge))
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  }
  
  _generateStripeToken() {
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const exp_month = Number(document.getElementById('expiryMonth').value);
    const exp_year = Number(document.getElementById('expiryYear').value);
    const cvcNumber = document.getElementById('cvcNumber').value;
    return {
      type: 'POST',
      route: '/api/v1/payments/createToken',
      body: {
        exp_month,
        exp_year,
        creditCardNumber,
        cvc: cvcNumber
      }
    }
  }

  _generatePaymentPostRequest(id) {
    const amount = this.state.amount;
    return {
      type: 'POST',
      route: '/api/v1/payments/receivePayment',
      body: {
        stripeToken: id,
        amount
      }
    };
  }

  render() {

    const {
      cart,
      amount
    } = this.state;
    
    const {
      HOME,
      PARADISO_NAME,
      MENU,
      CONTACT,
      PURCHASE
    } = constants;

    const makePurchaseContainer = (
        <div className="bakery__checkout-container">
          <form method="POST" 
                id="paymentForm" 
                className="pure-form pure-form-aligned bakery__checkout-container-form">
            <fieldset>
              <div className="bakery__checkout-container-error-block">
                <span className="payment-errors"></span>
              </div>
              <div className="bakery__checkout-container-card-block">
                <label>Card Number</label>
                <input id="creditCardNumber" className="pure-input" type="text" />
              </div>
              <div className="bakery__checkout-container-expiry-block">
                <label>Expiration (MM/YY)</label>
                <input id="expiryMonth" className="" type="text" size="2" />
                <span className="slash-separator"> / </span>
                <input id="expiryYear" className="" type="text" size="2" />
              </div>
              <div className="bakery__checkout-container-cvc-block">
                <label className="bakery__checkout-container-cvc-block-label">CVC</label>
                <input id="cvcNumber" type="text" size="4" />
              </div>
              <div className="bakery__checkout-container-amount-block">
                <label className="">Price</label>
                <input type="text" value={amount && `\$${amount}`} disabled />
              </div>
              <div className="checkout-purchase-container">
                <button className="pure-button pure-button-primary checkout-purchase-container-btn" 
                        onClick={this._makePurchase}>{PURCHASE}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
    );

    return (
      <div className="bakery__container">
        <header className="bakery__header-container">
        <div className="bakery__header-container-label">
          <p>{PARADISO_NAME}</p>
          <div className="bakery__header-container-action">
            <BakeryCheckout to="/checkout" cartLength={cart && cart.length} />
            <UserProfile />
          </div>
        </div>
        <div className="bakery__header-container-tabs">
          <nav className="bakery__header-container-tabs-nav">
            <ul className="bakery__header-container-tabs-list">
              <IndexLink className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/">{HOME}</IndexLink>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/menu">{MENU}</Link>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/contact">{CONTACT}</Link>
            </ul>
          </nav>
        </div>
        </header>
        {makePurchaseContainer}
      </div>
    );
  }

}

export default BakeryCheckoutPurchase;
