function checkoutCart(state = [], action) {
    const {
        type,
        item,
        cartLength,
        price,
        quantity
    } = action;
    
    switch (type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    cartLength,
                    price,
                    quantity,
                    cartItems: item
                }
            ];
        default:
            return state;
    }
}

export default checkoutCart;
