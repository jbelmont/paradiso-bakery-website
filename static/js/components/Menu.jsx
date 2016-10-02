import React, { Component } from 'react';

import MenuSideBar from './MenuSideBar.jsx';
import MenuItems from './MenuItems.jsx';

class Menu extends Component {

  constructor(props) {
    super(props);
    const breakfast = this.props.breakfast.reduce( (item) => item)["breakfast"];

    const alaCarte = this.props.breakfastAlaCarte.reduce( (item) => item)["breakfastAlaCarte"];
    const drinks = this.props.breakfastAlaCarte.reduce( (item) => item)["drinks"];
    const bacon = this.props.breakfastAlaCarte.reduce( (item) => item)["bacon"];
    const breakfastAlaCarte = alaCarte.concat(drinks, bacon);

    const entrees = this.props.entreeSalads.reduce( (item) => item)["entreeSalads"];
    const extras = this.props.entreeSalads.reduce( (item) => item)["extras"];
    const entreeSalads = entrees.concat(extras);

    const lunches = this.props.boxedLunches.reduce( (item) => item)["boxedLunches"];
    const filling = this.props.boxedLunches.reduce( (item) => item)["filling"];
    const breadSelection = this.props.boxedLunches.reduce( (item) => item)["breadSelection"];
    const cheeseSelection = this.props.boxedLunches.reduce( (item) => item)["cheeseSelection"];
    const boxedLunches = lunches.concat(filling, breadSelection, cheeseSelection);

    const trays = this.props.gourmetTraysAndApps.reduce( (item) => item)["gourmetTraysAndApps"];
    const alaCarteApps = this.props.gourmetTraysAndApps.reduce( (item) => item)["alaCarteApps"];
    const gourmetTraysAndApps = trays.concat(alaCarteApps);

    const mainSelections = this.props.main.reduce( (item) => item)["mainSelections"];
    const cincinattiFavorites = this.props.main.reduce( (item) => item)["cincinattiFavorites"];
    const main = mainSelections.concat(cincinattiFavorites);

    const pizzas = this.props.pizzas[0]["pizzas"];
    const pizza = Object.keys(pizzas).map( (pizza) => {
      return pizzas[pizza].reduce( (curr, item) => {
        curr[Object.keys(item)] = item;
        return curr;
      }, {});
    });

    this.state = {
      breakfast,
      breakfastAlaCarte,
      entreeSalads,
      boxedLunches,
      gourmetTraysAndApps,
      main,
      pizza,
      menuItemContainer: breakfast,
      typeOfMenuItem: ''
    };

    this._menuItem = this._menuItem.bind(this);
    this._itemWrapper = this._itemWrapper.bind(this);
  }

  _menuItem(item) {
    const menuItem = this._itemWrapper(item);
    this.setState({
      menuItemContainer: menuItem,
      typeOfMenuItem: item
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
      case 'Pizzas':
        return this.state.pizza;
    }
  }

  render() {
    const {
      menuItemContainer,
      typeOfMenuItem
    } = this.state;
    
    return (
      <div className="menu__container">
        <MenuSideBar itemArea={this._menuItem} />
        <MenuItems menuItems={menuItemContainer} typeOfMenuItem={typeOfMenuItem} />
      </div>
    );
  }

}

export default Menu;
