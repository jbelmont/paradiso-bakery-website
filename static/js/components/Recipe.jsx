import React, { Component } from 'react';

import {addToCart} from '../actions/index';
import store from '../store/store';

let cart = [];
class MenuItems extends Component {

  static propTypes = {
    recipeName: React.PropTypes.string,
    ingreds: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      recipeName: this.props.recipeName,
      ingreds: this.props.ingreds,
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
    cart.push(item);
    const hasCartBeenAdded = cart.some(cartItem => {
      return cartItem === item;
    });
    if (!hasCartBeenAdded) {
      cart.push(item);
      store.dispatch(addToCart({ item }));
    }
  }

  render() {
    const {
      recipeName,
      ingreds
    } = this.state;
    return (
      <div data-recipe-name={recipeName}
           className="menu_items__container-recipe pure-u-1-2" 
           onClick={this._addToCart}>
        <span className="menu_items__container-recipe-name">{recipeName}</span>
        <span className="menu_items__container-recipe-ingreds">{ingreds}</span>
      </div>
    );
  }

}

export default MenuItems;
