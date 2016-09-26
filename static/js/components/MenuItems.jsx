import React, { Component } from 'react';

import Recipe from './Recipe.jsx';

class MenuItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: this.props.menuItems
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      menuItems: nextProps.menuItems
    });
  }

  render() {
    let list = null, recipeName = null;
    const recipes = this.state.menuItems
      .map( item => {
        const keyLength = Object.keys(item).length;
        if (keyLength === 1) {
          recipeName = Object.keys(item);
          list = item[recipeName];
          return {
            list,
            recipeName
          };
        } else {
          const pizzas = Object.keys(item).map( (obj) => {
            return item[obj];
          });
          return pizzas.map( (pizza) => {
            return pizza;
          }).reduce( (curr, pizza) => {
            curr[pizza] = pizza;
            return curr;
          });
        }
      });
    return (
      <div className="menu_items__container">
        {recipes.map( (item) => <Recipe recipeName={item["recipeName"]} ingreds={item["list"]} />)}
      </div>
    );
  }

}

export default MenuItems;
