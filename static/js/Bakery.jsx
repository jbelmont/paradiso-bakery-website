import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import BakeryHeader from './BakeryHeader.jsx';
import BakeryBody from './BakeryBody.jsx';
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
          <IndexRoute component={BakeryBody}></IndexRoute>
          <Route path="/menu" component={BakeryBody}></Route>
          <Route path="/contact" component={BakeryBody}></Route>
          <Route path="/orders" component={BakeryBody}></Route>
        </Route>
      </Router>
    );
  }
}

export default Bakery
