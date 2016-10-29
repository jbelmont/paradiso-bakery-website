import * as constants from '../constants/constants.js';
const {
  REMOVE_FROM_CART,
  EMPTY_CART,
  ADD_TO_CART,
  PURCHASE_AMOUNT
} = constants;

export function addToCart({item, cartLength, price, quantity}) {
  return {
    type: ADD_TO_CART,
    item,
    cartLength,
    quantity,
    price
  };
}

export function emptyCart({empty}) {
  return {
    type: EMPTY_CART,
    empty
  };
}

export function removeFromCart({index}) {
  return {
    type: REMOVE_FROM_CART,
    index
  };
}

export function purchaseAmount({amount}) {
  return {
    type: PURCHASE_AMOUNT,
    amount
  };
}