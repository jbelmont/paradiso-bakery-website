export function addToCart({item, cartLength, price, quantity}) {
  return {
    type: 'ADD_TO_CART',
    item,
    cartLength,
    quantity,
    price
  };
}
