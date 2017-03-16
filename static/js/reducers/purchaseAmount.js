function purchaseAmount(state = [], action) {
  const {
        type,
        amount
    } = action;
    
  switch (type) {
  case 'PURCHASE_AMOUNT':
    return Object.assign({}, state, {
      amount
    });
  default:
    return state;
  }
}

export default purchaseAmount;
