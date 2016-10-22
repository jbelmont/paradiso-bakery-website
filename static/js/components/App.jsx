import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Main from './Main.jsx';
import BakeryHome from './BakeryHome.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';
import BakeryCheckoutArea from './BakeryCheckoutArea.jsx';

import store, { history } from '../store/store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={BakeryHome}></IndexRoute>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Route>
      <Route path="/checkout" component={BakeryCheckoutArea}></Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('bakeryContainer'));
