import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class BakeryCheckout extends Component {

  static propTypes = {
    cartLength: React.PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      cartSvgPath: "./build/symbol-defs.svg#icon-cart",
      cartLength: this.props.cartLength
    }
    this._clickCart = this._clickCart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cartLength: nextProps.cartLength
    });
  }

  _clickCart() {
    browserHistory.push("/checkout");
  }

  render() {
    const {cartLength} = this.state;
    let cartNumberContainer;
    if (cartLength > 0) {
      cartNumberContainer = (
        <span className="bakery__checkout-number">{cartLength}</span>
      );
    }
    return (
      <span className="bakery__header-container-action-checkout">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={this._clickCart}>
          <use xlinkHref={this.state.cartSvgPath}></use>
        </svg>
        {cartNumberContainer}
      </span>
    );
  }

}

export default BakeryCheckout;
