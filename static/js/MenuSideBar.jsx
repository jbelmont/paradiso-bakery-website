import React, { Component } from 'react';

import MenuSideBarButton from './MenuSideBarButton.jsx';

class MenuSideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuitems: ['Breakfast', 'Boxed Lunches', 'Entree Salads', 'Gourmet Trays and Appetizers', 'Main Selections', 'Pizzas']
    };
  }

  render() {
    const {menuitems} = this.state;
    const menuitemlist = menuitems.map( (item) => <MenuSideBarButton menuitem={item} />);
    return (
      <aside className="menu_sidebar__container">
        {menuitemlist}
        <div className="bottom-sidebar-space"></div>
      </aside>
    );
  }

}

export default MenuSideBar;
