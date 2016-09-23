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
            let list = item[Object.keys(item)];
            if (typeof list === "object") {
              const title = list["title"];
              const ingreds = list["ingreds"];
              <section>{title}</section>,
              <section>{ingreds}</section>
            } else {
              <section>{list}</section>
            }
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
