import React, { Component } from 'react';
import { Link } from 'react-router';

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
              <Link className='bakery__navigation--links' to="/menu">Home</Link>{this.props.children}
              <div className="bakery__navigation--bottom-border"></div>
            </li>
            <li role="presentation"
                data-link-name={this.state.linkName === 'menu' ? 'menu' : ''}
                className={this.state.linkName === 'menu' ? 'bakery__tabs selected' : 'bakery__tabs'}
                onClick={this._selectNav}>
                <Link className='bakery__navigation--links' to="/menu">Menu</Link>{this.props.children}
              <div className="bakery__navigation--bottom-border"></div>
            </li>
            <li role="presentation"
                data-link-name={this.state.linkName === 'contact' ? 'contact' : ''}
                className={this.state.linkName === 'contact' ? 'bakery__tabs selected' : 'bakery__tabs'}
                onClick={this._selectNav}>
              <Link className='bakery__navigation--links' to="/menu">Contact</Link>{this.props.children}
              <div className="bakery__navigation--bottom-border"></div>
            </li>
            <li role="presentation"
                data-link-name={this.state.linkName === 'orders' ? 'orders' : ''}
                className={this.state.linkName === 'orders' ? 'bakery__tabs selected' : 'bakery__tabs'}
                onClick={this._selectNav}>
              <Link className='bakery__navigation--links' to="/menu">Orders</Link>{this.props.children}
              <div className="bakery__navigation--bottom-border"></div>
            </li>
          </ul>
        </nav>
      </div>
      </header>
    );
  }
}
