import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Bakery extends Component {

  constructor(props) {
    super(props);
    const recipes = JSON.parse(document.getElementById('recipeData').value).recipes;
    const breakfastAlaCarte = recipes.filter((item) => item["breakfastAlaCarte"]);
    const breakfast = recipes.filter((item) => item["breakfast"]);
    const boxedLunches = recipes.filter((item) => item["boxedLunches"]);
    const entreeSalads = recipes.filter((item) => item["entreeSalads"]);
    const gourmetTraysAndApps = recipes.filter((item) => item["gourmetTraysAndApps"]);
    const main = recipes.filter((item) => item["mainSelections"] && item["cincinattiFavorites"]);
    const pizzas = recipes.filter((item) => item["pizzas"]);
    this.state = {
      breakfastAlaCarte,
      breakfast,
      boxedLunches,
      entreeSalads,
      gourmetTraysAndApps,
      main,
      pizzas,
      onlyActiveOnIndex: true
    };
  }

  render() {

    const childrenWithProps = React.cloneElement(this.props.children, {
      breakfastAlaCarte: this.state.breakfastAlaCarte,
      breakfast: this.state.breakfast,
      boxedLunches: this.state.boxedLunches,
      entreeSalads: this.state.entreeSalads,
      gourmetTraysAndApps: this.state.gourmetTraysAndApps,
      main: this.state.main,
      pizzas: this.state.pizzas
    });
    return (
      <div className="bakery__container">
        <header className="bakery__header-container">
        <div className="bakery__header-container-label">
          <p>Jean Pauls Paradiso</p>
        </div>
        <div className="bakery__header-container-tabs">
          <nav className="bakery__header-container-tabs-nav">
            <ul className="bakery__header-container-tabs-list">
              <IndexLink className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/">Home</IndexLink>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/menu">Menu</Link>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/contact">Contact</Link>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/orders">Orders</Link>
            </ul>
          </nav>
        </div>
        </header>
        {childrenWithProps}
      </div>
    );
  }
}

export default Bakery;
