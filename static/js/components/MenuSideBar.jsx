import React, { Component } from 'react';

import MenuSideBarButton from './MenuSideBarButton.jsx';

import * as constants from '../constants/constants.js';

class MenuSideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuitems: constants.RECIPE_SECTIONS
    };
  }

  render() {
    const {menuitems} = this.state;
    const keys = menuitems.map((val, index, arr) => {
      return `${val.split(' ')[0].toLowerCase()}${index}`;
    });
    const menuitemlist = menuitems.map( (item, index) => <MenuSideBarButton itemArea={this.props.itemArea} menuitem={item} key={keys[index]} />);
    return (
      <ul className="pure-menu custom-restricted-width menu_sidebar__container">
        {menuitemlist}
      </ul>
    );
  }

}

export default MenuSideBar;
