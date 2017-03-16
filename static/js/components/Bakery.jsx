import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import store from '../store/store';

import BakeryCheckout from './BakeryCheckout';
import UserProfile from './UserProfile';
import * as constants from '../constants/constants.js';

class Bakery extends Component {

  static propTypes = {
    breakfastAlaCarte: React.PropTypes.array,
    breakfast: React.PropTypes.array,
    boxedLunches: React.PropTypes.array,
    entreeSalads: React.PropTypes.array,
    gourmetTraysAndApps: React.PropTypes.array,
    main: React.PropTypes.array,
    pizzas: React.PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      breakfastAlaCarte: this.props.breakfastAlaCarte,
      breakfast: this.props.breakfast,
      boxedLunches: this.props.boxedLunches,
      entreeSalads: this.props.entreeSalads,
      gourmetTraysAndApps: this.props.gourmetTraysAndApps,
      main: this.props.main,
      pizzas: this.props.pizzas,
      onlyActiveOnIndex: true,
      cartLength: 0
    };
  }

  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      breakfastAlaCarte: this.state.breakfastAlaCarte,
      breakfast: this.state.breakfast,
      boxedLunches: this.state.boxedLunches,
      entreeSalads: this.state.entreeSalads,
      gourmetTraysAndApps: this.state.gourmetTraysAndApps,
      main: this.state.main,
      pizzas: this.state.pizzas
    });

    const cartLength = store.getState()['checkoutCart']
      && store.getState()['checkoutCart'].length;

    const {
      HOME,
      MENU,
      CONTACT,
      PARADISO_NAME
    } = constants;

    return (
      <div className="bakery__container">
        <header className="bakery__header-container">
        <div className="bakery__header-container-label">
          <p>{PARADISO_NAME}</p>
          <div className="bakery__header-container-action">
            <BakeryCheckout to="/checkout" cartLength={cartLength || this.state.cartLength} />
            <UserProfile />
          </div>
        </div>
        <div className="bakery__header-container-tabs">
          <nav className="bakery__header-container-tabs-nav">
            <ul className="bakery__header-container-tabs-list">
              <IndexLink className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/">{HOME}</IndexLink>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/menu">{MENU}</Link>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/contact">{CONTACT}</Link>
              <Link className="bakery__tabs"
                activeClassName="bakery__navigation--bottom-border"
                to="/facebook">{FACEBOOK}</Link>
            </ul>
          </nav>
        </div>
        </header>
        {childrenWithProps}
      </div>
    );
  }
}

export default Bakery;
