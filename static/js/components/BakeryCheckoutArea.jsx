import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import store from '../store/store';

import BakeryCheckout from './BakeryCheckout';
import UserProfile from './UserProfile';

import {ajax} from '../utils/ajax.js';

class BakeryCheckoutArea extends Component {

 constructor(props) {
    super(props);
    this.state = {
        cartItems: [],
        rightArrowSvgPath: './build/symbol-defs.svg#icon-arrow-right'
    };
    this._makePurchase = this._makePurchase.bind(this);
    this._generatePaymentPostRequest = this._generatePaymentPostRequest.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cartItems: nextProps.cartItems
    });
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
    const quantity = Array.from(document.getElementsByClassName('checkout-quantity-row'))
        .map(quantity =>  Number(quantity.dataset["quantity"]));
      const price = Array.from(document.getElementsByClassName('checkout-price-row'))
        .map(quantity => Number(quantity.dataset["price"]));
      const amount = price
        .map((price, index, arr) => price * quantity[index])
        .reduce((prev, curr) => prev + curr, 0) * 100;
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
    const cart = store.getState() && store.getState()["checkoutCart"];

    let cartContainer;
    if (cart && cart.length > 0) {
      cartContainer = (
        cart.map(item => <tr className="bakery__checkout-container-cart-item">
          <td>{item["cartItems"]}</td>
          <td className="checkout-quantity-row" data-quantity={item["quantity"]}>{item["quantity"]}</td>
          <td className="checkout-price-row" data-price={item["price"]}>{item["price"]}</td>
          </tr>
        )
      );

      cartContainer = (
        <div className="bakery__checkout-container-progress-bar">
          <div className="bakery__checkout-container-progress-bar-edit">
              <label className="bakery__checkout-container-progress-bar-edit-label">Edit</label>
          </div>
          <div className="bakery__checkout-container-progress-bar-checkout">
            <label className="bakery__checkout-container-progress-bar-checkout-label">Checkout</label>
          </div>
          <div className="bakery__checkout-container-shopping-cart">
            <form name="checkoutFormData">
              <table className="pure-table pure-table-horizontal bakery__checkout-container-shopping-cart-table">
                <thead>
                  <tr className="bakery__checkout-container-shopping-cart-header-row">
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartContainer}
                </tbody>
              </table>
            </form>
            <div className="purchase-checkout-container">
              <button className="pure-button checkout-purchase-btn" onClick={this._makePurchase}>Checkout</button>
            </div>
          </div>
        </div>
      );
    } else {
      cartContainer = (
        <h4 className="bakery__checkout-container-empty-cart">You have no items in your shopping cart!</h4>
      );
    }

    return (
      <div className="bakery__container">
        <header className="bakery__header-container">
        <div className="bakery__header-container-label">
          <p>Jean Pauls Paradiso</p>
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
                to="/">Home</IndexLink>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/menu">Menu</Link>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/contact">Contact</Link>
            </ul>
          </nav>
        </div>
        </header>
        <div className="bakery__checkout-container">
          {cartContainer}
        </div>
      </div>
    );
  }

}

export default BakeryCheckoutArea;
