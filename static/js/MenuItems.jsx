import React, { Component } from 'react';

class MenuItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: this.props.menuItems
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(this.state);
    this.setState({
      menuItems: nextProps.menuItems
    });
  }

  render() {
    const container = (
      this.state.menuItems
        .map( item => {
          const list = item[Object.keys(item)];
          <section>{list}</section>
          return list;
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
