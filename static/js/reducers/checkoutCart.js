function checkoutCart(state = [], action) {
    const {
        type,
        item
    } = action;
    switch (type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    cartItems: item
                }
            ];
        default:
            return state;
    }
}

export default checkoutCart;
