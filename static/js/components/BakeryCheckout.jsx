import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class BakeryCheckout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartSvgPath: "./build/symbol-defs.svg#icon-cart"
    }
    this._clickCart = this._clickCart.bind(this);
  }

  _clickCart() {
    browserHistory.push("/checkout");
  }

  render() {
    return (
      <span className="bakery__header-container-action-checkout">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={this._clickCart}>
          <use xlinkHref={this.state.cartSvgPath}></use>
        </svg>
      </span>
    );
  }

}

export default BakeryCheckout;
