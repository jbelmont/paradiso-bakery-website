import React, { Component } from 'react';

export default class BakeryHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerSelected: this.props.headerSelected
    };
    this._selectNav = this._selectNav.bind(this);
  }

  _selectNav() {
    this.setState({
      headerSelected: !this.state.headerSelected
    });
  }

  render() {
    return (
      <header className="bakery__header-container">
      <div className="bakery__header-container-label">
        <p>Jean Pauls Paradiso</p>
      </div>
      <div className="bakery__header-container-tabs">
        <nav className="bakery__header-container-tabs-nav">
          <ul className="bakery__header-container-tabs-list">
            <li role="presentation"
            className={`bakery__tabs ${this.state.headerSelected && 'selected' || ''}`}
            onClick={this._selectNav}>
            <a href="#">Home</a></li>
            <li role="presentation"
            className={`bakery__tabs ${this.state.headerSelected && 'selected' || ''}`}
            onClick={this._selectNav}>
            <a href="#">Breads & Pastries</a></li>
            <li role="presentation"
            className={`bakery__tabs ${this.state.headerSelected && 'selected' || ''}`}
            onClick={this._selectNav}>
            <a href="#">Contact</a></li>
            <li role="presentation"
            className={`bakery__tabs ${this.state.headerSelected && 'selected' || ''}`}
            onClick={this._selectNav}>
            <a href="#">Orders</a></li>
          </ul>
        </nav>
      </div>
      </header>
    );
  }
}
