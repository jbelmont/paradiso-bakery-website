import React, { Component } from 'react';

class BakeryCheckout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartSvgPath: "./build/symbol-defs.svg#icon-cart"
    }
  }

  render() {
    return (
      <span className="bakery__header-container-action-checkout">
        <svg xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref={this.state.cartSvgPath}></use>
        </svg>
      </span>
    );
  }

}

export default BakeryCheckout;
