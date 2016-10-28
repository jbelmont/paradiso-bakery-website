import React, { Component } from 'react';

import {addToCart} from '../actions/index';
import store from '../store/store';

import * as constants from '../constants/constants.js';

let cart = [];
let cartLength = 0;
class MenuItems extends Component {

  static propTypes = {
    recipeName: React.PropTypes.string,
    ingreds: React.PropTypes.string,
    addToCartSvgPath: React.PropTypes.string,
    price: React.PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      recipeName: this.props.recipeName,
      ingreds: this.props.ingreds,
      addToCartSvgPath: this.props.addToCartSvgPath,
      price: this.props.price,
      quantity: 1,
      cartItems: []
    };
    this._addToCart = this._addToCart.bind(this);
    this._updateQuantity = this._updateQuantity.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      recipeName: nextProps.recipeName,
      ingreds: nextProps.ingreds
    });
  }

  _updateQuantity(evt) {
    this.setState({
      quantity: evt.target.value
    });
  }

  _addToCart(evt) {
    const item = evt.currentTarget.dataset["recipeName"];
    const price = evt.currentTarget.dataset["price"];
    const hasCartBeenAdded = cart.some(cartItem => {
      return cartItem === item;
    });
    if (!hasCartBeenAdded) {
      cart.push(item);
      cartLength++;
      store.dispatch(addToCart({ 
        item,
        cartLength,
        price,
        quantity: this.state.quantity
      }));
    }
  }

  render() {
    const {
      recipeName,
      ingreds,
      price,
      addToCartSvgPath,
      addQuantitySvgPath
    } = this.state;

    const {
      RECIPE_QUANTITY,
      CART,
      QUANTITY
    } = constants;

    let recipeContainer;

    const quantityContainer = (
      <span className="menu_item__container-recipe-add-to-quantity">
        <label className="menu_item__container-recipe-add-to-quantity-label">{QUANTITY}</label>
        <select name="selectMenuQuantity" onChange={this._updateQuantity}>
          <option value="1" selected>1</option> 
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </span>
    );

    if (recipeName !== "Title" 
        && recipeName !== "Header Notice"
        && recipeName !== "Notice"
        && recipeName !== "Beverages"
        && recipeName !== "Extra1"
        && recipeName !== "Extra2"
        && recipeName !== "Boxed Lunches") {
      recipeContainer = (
        <div>
          <span className="menu_items__container-recipe-name">{recipeName}</span>
          <span className="menu_items__container-recipe-ingreds">{ingreds}</span>
          <div className="menu_items__container-recipe-add">
            {quantityContainer}
            <span className="menu_item__container-recipe-add-to-cart">
              <button data-recipe-name={recipeName}
                      data-price={price}
                      className="pure-button"  
                      onClick={this._addToCart}>
                <svg
                  className="menu_item-checkout-icon" 
                  xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={addToCartSvgPath}></use>
                </svg>
                <span className="menu_item-checkout-text">{CART}</span>
              </button>
            </span>
          </div>
        </div>
      );
    }
    
    return (
      <div className="menu_items__container-recipe pure-u-1-2">
        {recipeContainer}
      </div>
    );
  }

}

export default MenuItems;
