import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Bakery extends Component {

  static propTypes = {
    breakfastAlaCarte: React.PropTypes.array,
    breakfast: React.PropTypes.array,
    boxedLunches: React.PropTypes.array,
    entreeSalads: React.PropTypes.array,
    gourmetTraysAndApps: React.PropTypes.array,
    main: React.PropTypes.array,
    pizzas: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      breakfastAlaCarte: this.props.breakfastAlaCarte,
      breakfast: this.props.breakfast,
      boxedLunches: this.props.boxedLunches,
      entreeSalads: this.props.entreeSalads,
      gourmetTraysAndApps: this.props.gourmetTraysAndApps,
      main: this.props.main,
      pizzas: this.props.pizzas,
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
