import React, { Component } from 'react';

export default class BakeryHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerSelected: this.props.headerSelected,
      linkName: ''
    };
    this._selectNav = this._selectNav.bind(this);
  }

  _selectNav(event) {
    const linkName = event.target.textContent.split(" ")[0].toLowerCase();
    this.setState({
      linkName: linkName
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
                data-link-name={this.state.linkName === 'home' ? 'home' : ''}
                className={this.state.linkName === 'home' ? 'bakery__tabs selected' : 'bakery__tabs'}
                onClick={this._selectNav}>
              <a className='bakery__navigation--links'
                href="#">Home</a>
            </li>
            <li role="presentation"
                data-link-name={this.state.linkName === 'breads' ? 'breads' : ''}
                className={this.state.linkName === 'breads' ? 'bakery__tabs selected' : 'bakery__tabs'}
                onClick={this._selectNav}>
              <a className='bakery__navigation--links'
                href="#">Breads & Pastries</a>
            </li>
            <li role="presentation"
                data-link-name={this.state.linkName === 'contact' ? 'contact' : ''}
                className={this.state.linkName === 'contact' ? 'bakery__tabs selected' : 'bakery__tabs'}
                onClick={this._selectNav}>
              <a className='bakery__navigation--links'
                href="#">Contact</a>
            </li>
            <li role="presentation"
                data-link-name={this.state.linkName === 'orders' ? 'orders' : ''}
                className={this.state.linkName === 'orders' ? 'bakery__tabs selected' : 'bakery__tabs'}
                onClick={this._selectNav}>
              <a className='bakery__navigation--links'
                href="#">Orders</a>
            </li>
          </ul>
        </nav>
      </div>
      </header>
    );
  }
}
