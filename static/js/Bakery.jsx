import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import BakeryHeader from './BakeryHeader.jsx';
import BakeryHome from './BakeryHome.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';
import Orders from './Orders.jsx';
import BakeryFooter from './BakeryFooter.jsx';

class Bakery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerSelected: true
    };
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BakeryHeader}>
          <IndexRoute component={BakeryHome}></IndexRoute>
          <Route path="/menu" component={Menu}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/orders" component={Orders}></Route>
        </Route>
      </Router>
    );
  }
}

export default Bakery;
