import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import store from '../store/store';

import BakeryCheckout from './BakeryCheckout';
import UserProfile from './UserProfile';

class BakeryCheckoutArea extends Component {

 constructor(props) {
    super(props);
    this.state = {
        cartItems: [],
        rightArrowSvgPath: './build/symbol-defs.svg#icon-arrow-right'
    };
    this._makePurchase = this._makePurchase.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cartItems: nextProps.cartItems
    });
  }

  _makePurchase() {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('POST', '/api/v1/payments/createToken', true);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          const data = JSON.parse(this.response);
          resolve(data);
        } else {
          console.log('Some kind of error occurred');
          reject(new Error('error ocurred'));
        }
      };

      request.onerror = function() {
        console.error('Something went wrong with the transaction');
      };

      request.send();
    })
    .then(token => {
      // const request = new XMLHttpRequest();
      // request.open('POST', '/api/v1/payments/receivePayment', true);

      // request.onload = function() {
      //   if (this.status >= 200 && this.status < 400) {
      //     const data = JSON.parse(this.response);
      //     resolve(data);
      //   } else {
      //     console.log('Some kind of error occurred');
      //     reject(new Error('error ocurred'));
      //   }
      // };

      // request.onerror = function() {
      //   console.error('Something went wrong with the transaction');
      // };

      // request.send();
      console.log(token);
    })
    .catch(err => console.error(err));
    
  }

  render() {
    const cart = store.getState() && store.getState()["checkoutCart"];

    let cartContainer;
    if (cart && cart.length > 0) {
      cartContainer = (
        cart.map(item => <tr className="bakery__checkout-container-cart-item">
          <td>{item["cartItems"]}</td>
          <td>{item["quantity"]}</td>
          <td>{item["price"]}</td>
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
