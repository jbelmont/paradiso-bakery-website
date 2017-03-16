import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import {browserHistory} from 'react-router';

import store from '../store/store';
import {removeFromCart, purchaseAmount} from '../actions/index';

import BakeryCheckout from './BakeryCheckout';
import UserProfile from './UserProfile';

import {ajax} from '../utils/ajax.js';

import * as constants from '../constants/constants.js';

class BakeryCheckoutArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      rightArrowSvgPath: './build/symbol-defs.svg#icon-arrow-right',
      trashBinPath: './build/symbol-defs.svg#icon-bin',
      cart: store.getState() && store.getState()['checkoutCart']
    };
    this._totalPurchaseAmount = this._totalPurchaseAmount.bind(this);
    this._deletePurchase = this._deletePurchase.bind(this);
    this._goToFinalCheckout = this._goToFinalCheckout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cartItems: nextProps.cartItems
    });
  }

  _deletePurchase(evt) {
    const {cart} = this.state;
    const itemDescription = evt.currentTarget.attributes[2].value;
    const deleteItemIndex = cart.findIndex(elem => elem['cartItems'] === itemDescription);
    store.dispatch(removeFromCart({ 
      index: deleteItemIndex 
    }));
    this.setState({
      cart: store.getState() && store.getState()['checkoutCart']
    });
  }

  _goToFinalCheckout() {
    const amount = this._totalPurchaseAmount();
    store.dispatch(purchaseAmount({ amount }));
    browserHistory.push('/purchase');
  }

  _totalPurchaseAmount() {
    const quantity = Array.from(document.getElementsByClassName('checkout-quantity-row'))
        .map(quantity =>  Number(quantity.dataset['quantity']));
    const price = Array.from(document.getElementsByClassName('checkout-price-row'))
      .map(quantity => Number(quantity.dataset['price']));
    const amount = price
      .map((price, index, arr) => price * quantity[index])
      .reduce((prev, curr) => prev + curr, 0) * 100;
    return amount;
  }

  render() {

    const {
      cart,
      trashBinPath,
      pencilSvgPath
    } = this.state;
    
    const {
      HOME,
      PARADISO_NAME,
      MENU,
      CONTACT,
      ITEM,
      QUANTITY,
      PRICE,
      CHECKOUT,
      EMPTY_SHOPPING_CART,
      EDIT,
      CONTINUE
    } = constants;

    let cartContainer;
    if (cart && cart.length > 0) {
      cartContainer = (
        cart.map(item => <tr className="bakery__checkout-container-cart-item">
          <td>{item['cartItems']}</td>
          <td className="checkout-quantity-row" data-quantity={item['quantity']}>{item['quantity']}</td>
          <td className="checkout-price-row" data-price={item['price']}>{item['price']}</td>
          <td className="delete-item-checkout">
            <svg className="delete-item-checkout-icon" 
                  xmlns="http://www.w3.org/2000/svg"
                  data-item-description={item['cartItems']}
                  onClick={this._deletePurchase}>
              <use xlinkHref={trashBinPath}></use>
            </svg>
          </td>
          </tr>
        )
      );

      cartContainer = (
        <div className="bakery__checkout-container-progress-bar">
          <div className="bakery__checkout-container-progress-bar-edit">
              <label className="bakery__checkout-container-progress-bar-edit-label">{EDIT}</label>
          </div>
          <div className="bakery__checkout-container-progress-bar-checkout">
            <label className="bakery__checkout-container-progress-bar-checkout-label">{CHECKOUT}</label>
          </div>
          <div className="bakery__checkout-container-shopping-cart">
            <form name="checkoutFormData">
              <table className="pure-table pure-table-horizontal bakery__checkout-container-shopping-cart-table">
                <thead>
                  <tr className="bakery__checkout-container-shopping-cart-header-row">
                    <th>{ITEM}</th>
                    <th>{QUANTITY}</th>
                    <th>{PRICE}</th>
                  </tr>
                </thead>
                <tbody>
                  {cartContainer}
                </tbody>
              </table>
            </form>
            <div className="purchase-checkout-container">
              <button className="pure-button checkout-continue-btn" onClick={this._goToFinalCheckout}>{CONTINUE}</button>
            </div>
          </div>
        </div>
      );
    } else {
      cartContainer = (
        <h4 className="bakery__checkout-container-empty-cart">{EMPTY_SHOPPING_CART}</h4>
      );
    }

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
          {cartContainer}
        </div>
      </div>
    );
  }

}

export default BakeryCheckoutArea;
