import React, { Component } from 'react';

import Recipe from './Recipe.jsx';

class MenuItems extends Component {

  static propTypes = {
    menuItems: React.PropTypes.array,
    typeOfMenuItem: React.PropTypes.string,
    addToCartSvgPath: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      menuItems: this.props.menuItems,
      menuType: this.props.typeOfMenuItem,
      addToCartSvgPath: this.props.addToCartSvgPath
    };

    this._deCamelifyRecipeName = this._deCamelifyRecipeName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      menuItems: nextProps.menuItems,
      menuType: nextProps.typeOfMenuItem
    });
  }

  _deCamelifyRecipeName(recipeName) {
    const name = Array.isArray(recipeName) ? recipeName[0] : recipeName;
    if (name && name.length > 0) {
      return name
        .split(/(?=[A-Z])/)
        .map((chars, index, arr) => {
          if (index === 0) {
            return `${chars[0].toUpperCase()}${chars.slice(1)}`;
          }
          return chars;
        })
        .join(' ');
    }
  }

  render() {
    let list = null, recipeName = null, price = null, recipes;
    const {
      menuType, 
      menuItems, 
      addToCartSvgPath
    } = this.state;

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
            ]["ingreds"],
            price: item[
              Object.keys(item)
              .filter(item => item === "price")
            ]["price"]
          };
        });
    } else {
      recipes = menuItems
        .map( item => {
          const keyLength = Object.keys(item).length;
          recipeName = Object.keys(item).filter(key => key !== 'price')[0];
          price = item[Object.keys(item).filter(key => key === "price")] || 0.00;
          list = recipeName && item[recipeName];
          return {
            list,
            price,
            recipeName: recipeName
          };
        });
    }

    return (
      <div className="menu_items__container pure-g">
        {recipes.map( (item) => <Recipe recipeName={this._deCamelifyRecipeName(item["recipeName"])} 
                                        price={item["price"]}
                                        ingreds={item["list"]} 
                                        addToCartSvgPath={addToCartSvgPath} />)}
      </div>
    );
  }

}

export default MenuItems;
