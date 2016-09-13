import React, { Component } from 'react';

import MenuSideBar from './MenuSideBar.jsx';
import MenuItems from './MenuItems.jsx';

class Menu extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu__container">
        <MenuSideBar />
        <MenuItems />
      </div>
    );
  }

}

export default Menu;
