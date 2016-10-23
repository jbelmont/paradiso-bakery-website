import React, { Component } from 'react';

import {addToCart} from '../actions/index';
import store from '../store/store';

let cart = [];
let cartLength = 0;
class MenuItems extends Component {

  static propTypes = {
    recipeName: React.PropTypes.string,
    ingreds: React.PropTypes.string,
    addToCartSvgPath: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      recipeName: this.props.recipeName,
      ingreds: this.props.ingreds,
      addToCartSvgPath: this.props.addToCartSvgPath,
      cartItems: []
    };
    this._addToCart = this._addToCart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      recipeName: nextProps.recipeName,
      ingreds: nextProps.ingreds
    });
  }

  _addToCart(evt) {
    const item = evt.currentTarget.dataset["recipeName"];
    const hasCartBeenAdded = cart.some(cartItem => {
      return cartItem === item;
    });
    if (!hasCartBeenAdded) {
      cart.push(item);
      cartLength++;
      store.dispatch(addToCart({ 
        item,
        cartLength 
      }));
    }
  }

  render() {
    const {
      recipeName,
      ingreds,
      addToCartSvgPath
    } = this.state;
    
    return (
      <div className="menu_items__container-recipe pure-u-1-2">
        <span className="menu_items__container-recipe-name">{recipeName}</span>
        <span className="menu_items__container-recipe-ingreds">{ingreds}</span>
        <span className="menu_item__container-recipe-add-to-cart">
          <button data-recipe-name={recipeName}
                  className="pure-button"  
                  onClick={this._addToCart}>
            <svg
              className="menu_item-checkout-icon" 
              xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={addToCartSvgPath}></use>
            </svg>
            <span className="menu_item-checkout-text">Cart</span>
          </button>
        </span>
      </div>
    );
  }

}

export default MenuItems;
