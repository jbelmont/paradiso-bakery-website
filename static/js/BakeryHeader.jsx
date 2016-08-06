import React, { Component } from 'react';

export default class BakeryHeader extends Component {

  render() {
    return (
      <header className="bakery__header-container">
        <ul className="">
          <li role="presentation" className="bakery__tabs"><a href="#">Home</a></li>
          <li role="presentation" className="bakery__tabs"><a href="#">Breads & Pastries</a></li>
          <li role="presentation" className="bakery__tabs"><a href="#">Contact</a></li>
          <li role="presentation" className="bakery__tabs"><a href="#">Orders</a></li>
        </ul>
      </header>
    );
  }

}
