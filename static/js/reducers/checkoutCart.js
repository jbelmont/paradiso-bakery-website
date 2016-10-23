function checkoutCart(state = [], action) {
    const {
        type,
        item,
        cartLength
    } = action;
    
    switch (type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    cartLength,
                    cartItems: item
                }
            ];
        default:
            return state;
    }
}

export default checkoutCart;
