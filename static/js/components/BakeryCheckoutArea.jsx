import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import BakeryCheckout from './BakeryCheckout';
import UserProfile from './UserProfile';

class BakeryCheckoutArea extends Component {

 constructor(props) {
    super(props);
    this.state = {
        cartItems: ['Pizzas', 'Bread', 'Pastries']
    };
  }

  render() {
    const cartStuff = (this.state.cartItems.map(item => <div>{item}</div>));

    return (
      <div className="bakery__container">
        <header className="bakery__header-container">
        <div className="bakery__header-container-label">
          <p>Jean Pauls Paradiso</p>
          <div className="bakery__header-container-action">
            <BakeryCheckout to="/checkout" />
            <UserProfile />
          </div>
        </div>
        <div className="bakery__header-container-tabs">
          <nav className="bakery__header-container-tabs-nav">
            <ul className="bakery__header-container-tabs-list">
              <IndexLink className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/">Home</IndexLink>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/menu">Menu</Link>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/contact">Contact</Link>
            </ul>
          </nav>
        </div>
        </header>
        {cartStuff}
      </div>
    );
  }

}

export default BakeryCheckoutArea;
