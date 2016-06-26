import React, { Component } from 'react';

export default class BakeryHeader extends Component {

  render() {
    return (
      <header className="bakery__header-container">
        <ul className="nav nav-tabs">
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Breads & Pastries</a></li>
          <li role="presentation"><a href="#">Contact</a></li>
        </ul>
      </header>
    );
  }

}
