import React, { Component } from 'react';

import Recipe from './Recipe.jsx';

class MenuItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: this.props.menuItems,
      menuType: this.props.typeOfMenuItem
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      menuItems: nextProps.menuItems,
      menuType: nextProps.typeOfMenuItem
    });
  }

  render() {
    let list = null, recipeName = null, recipes;
    const {menuType, menuItems } = this.state;
    if (menuType.toLowerCase() === 'pizzas') {
      recipes = menuItems
        .map( item => {
          return {
            recipeName: item[
              Object.keys(item)
              .filter(item => item === "title")
            ]["title"],
            list: item[
              Object.keys(item)
              .filter(item => item === "ingreds")
            ]["ingreds"]
          };
        });
    } else {
      recipes = menuItems
        .map( item => {
          const keyLength = Object.keys(item).length;
          if (keyLength === 1) {
            recipeName = Object.keys(item);
            list = item[recipeName];
            return {
              list,
              recipeName
            };
          }
        });
    }

    return (
      <div className="menu_items__container">
        {recipes.map( (item) => <Recipe recipeName={item["recipeName"]} ingreds={item["list"]} />)}
      </div>
    );
  }

}

export default MenuItems;
