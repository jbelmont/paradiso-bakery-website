import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Bakery from './Bakery.jsx';
import BakeryHome from './BakeryHome.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';
import Orders from './Orders.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Bakery}>
      <IndexRoute component={BakeryHome}></IndexRoute>
      <Route path="/menu" component={Menu}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/orders" component={Orders}></Route>
    </Route>
  </Router>,
  document.getElementById('bakeryContainer')
);
