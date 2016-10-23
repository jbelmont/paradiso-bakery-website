export function addToCart({item, cartLength}) {
  return {
    type: 'ADD_TO_CART',
    item,
    cartLength
  };
}
