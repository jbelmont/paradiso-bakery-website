import React, { Component } from 'react';

class MenuItems extends Component {

  static propTypes = {
    recipeName: React.propTypes.string,
    ingreds: React.propTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      recipeName: this.props.recipeName,
      ingreds: this.props.ingreds
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      recipeName: nextProps.recipeName,
      ingreds: nextProps.ingreds
    });
  }

  render() {
    const {
      recipeName,
      ingreds
    } = this.state;
    return (
      <div className="menu_items__container-recipe pure-u-1-2">
        <span className="menu_items__container-recipe-name">{recipeName}</span>
        <span className="menu_items__container-recipe-ingreds">{ingreds}</span>
      </div>
    );
  }

}

export default MenuItems;
