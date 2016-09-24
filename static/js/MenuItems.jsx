import React, { Component } from 'react';

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

    const container = (
        this.state.menuItems
          .map( item => {
            const keyLength = Object.keys(item).length;
            if (keyLength === 1) {
              let list = item[Object.keys(item)];
              <section>{list}</section>
              return list;
            } else {
              const pizzas = Object.keys(item).map( (obj) => {
                return item[obj];
              });
              return pizzas.map( (pizza) => {
                <section>{pizza[Object.keys(pizza)]}</section>
                return pizza[Object.keys(pizza)];
              });
            }
          })
      );
    return (
      <div className="menu_items__container">
        {container}
      </div>
    );
  }

}

export default MenuItems;
