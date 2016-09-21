import React, { Component } from 'react';

import MenuSideBar from './MenuSideBar.jsx';
import MenuItems from './MenuItems.jsx';

class Menu extends Component {

  constructor(props) {
    super(props);
    const breakfast = this.props.breakfast.reduce( (item) => item)["breakfast"];
    const breakfastAlaCarte = this.props.breakfastAlaCarte.reduce( (item) => item)["breakfastAlaCarte"];
    const entreeSalads = this.props.entreeSalads.reduce( (item) => item)["entreeSalads"];
    const boxedLunches = this.props.entreeSalads.reduce( (item) => item)["boxedLunches"];
    const gourmetTraysAndApps = this.props.gourmetTraysAndApps.reduce( (item) => item)["gourmetTraysAndApps"];
    const main = this.props.main.reduce( (item) => item);
    const pizza = this.props.pizzas.reduce( (item) => item)["pizzas"];

    this.state = {
      menuItemContainer: breakfast
    };

    this._menuItem = this._menuItem.bind(this);
    this._itemWrapper = this._itemWrapper.bind(this);
  }

  _menuItem(item) {
    const menuItem = this._itemWrapper(item);
    this.setState({
      menuItemContainer: menuItem
    });
  }

  _itemWrapper(item) {
    switch(item) {
      case 'Breakfast':
        return this.state.breakfast;
      case 'Breakfast Ala Carte':
        return this.state.breakfastAlaCarte;
      case 'Boxed Lunches':
        return this.state.boxedLunches;
      case 'Entree Salads':
        return this.state.entreeSalads;
      case 'Gourmet Trays and Appetizers':
        return this.state.gourmetTraysAndApps;
      case 'Main Selections':
        return this.state.main;
      case 'Main Selections':
        return this.state.pizza;
    }
  }

  render() {
    console.log(this.state.menuItemContainer);
    return (
      <div className="menu__container">
        <MenuSideBar itemArea={this._menuItem} />
        <MenuItems menuItems={this.state.menuItemContainer} />
      </div>
    );
  }

}

export default Menu;
