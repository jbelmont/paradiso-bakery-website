import React, { Component } from 'react';

class MenuSideBarButton extends Component {

  constructor(props) {
    super(props);
    this._menuItemClick = this._menuItemClick.bind(this);
  }

  _menuItemClick(event) {
    this.props.itemArea(event.currentTarget.textContent);
  }

  render() {
    const {menuitem} = this.props;
    return (
      <button className="menu_sidebar_button__container" onClick={this._menuItemClick}>{menuitem}</button>
    );
  }

}

export default MenuSideBarButton;
