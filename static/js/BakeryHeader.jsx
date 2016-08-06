import React, { Component } from 'react';

export default class BakeryHeader extends Component {

  render() {
    return (
      <header className="bakery__header-container">
      <div className="bakery__header-container-label">
        <p>Jean Pauls Paradiso</p>
      </div>
      <div className="bakery__header-container-tabs">
        <nav className="bakery">
          <ul>
            <li role="presentation" className="bakery__tabs"><a href="#">Home</a></li>
            <li role="presentation" className="bakery__tabs"><a href="#">Breads & Pastries</a></li>
            <li role="presentation" className="bakery__tabs"><a href="#">Contact</a></li>
            <li role="presentation" className="bakery__tabs"><a href="#">Orders</a></li>
          </ul>
        </nav>
      </div>
      </header>
    );
  }

}
