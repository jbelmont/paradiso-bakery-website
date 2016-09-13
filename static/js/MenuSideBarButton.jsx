import React, { Component } from 'react';

class MenuSideBarButton extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const {menuitem} = this.props;
    return (
      <button className="menu_sidebar_button__container">{menuitem}</button>
    );
  }

}

export default MenuSideBarButton;
