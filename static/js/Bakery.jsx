import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Bakery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onlyActiveOnIndex: true
    };
  }

  render() {
    return (
      <div className="bakery__container">
        <header className="bakery__header-container">
        <div className="bakery__header-container-label">
          <p>Jean Pauls Paradiso</p>
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
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/orders">Orders</Link>
            </ul>
          </nav>
        </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Bakery;
