import React, { Component } from 'react';

import MenuSideBarButton from './MenuSideBarButton.jsx';

class MenuSideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuitems: ['Breakfast', 'Breakfast Ala Carte','Boxed Lunches', 'Entree Salads', 'Gourmet Trays and Appetizers', 'Main Selections', 'Pizzas']
    };
  }

  render() {
    const {menuitems} = this.state;
    const keys = menuitems.map((val, index, arr) => {
      return `${val.split(" ")[0].toLowerCase()}${index}`;
    });
    const menuitemlist = menuitems.map( (item, index) => <MenuSideBarButton itemArea={this.props.itemArea} menuitem={item} key={keys[index]} />);
    return (
      <aside className="menu_sidebar__container">
        {menuitemlist}
        <div className="bottom-sidebar-space"></div>
      </aside>
    );
  }

}

export default MenuSideBar;
