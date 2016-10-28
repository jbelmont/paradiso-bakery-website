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
  }

  _makePurchase() {
    const createTokenPostRequest = {
      type: 'POST',
      route: '/api/v1/payments/createToken',
      body: null
    };

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
      cart
    } = this.state;
    
    const {
      HOME,
      PARADISO_NAME,
      MENU,
      CONTACT,
      PURCHASE
    } = constants;

    

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
        <div className="bakery__checkout-container">
            <button className="pure-button checkout-purchase-btn" onClick={this._makePurchase}>{PURCHASE}</button>
        </div>
      </div>
    );
  }

}

export default BakeryCheckoutPurchase;
