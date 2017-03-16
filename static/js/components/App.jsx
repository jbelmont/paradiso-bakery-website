import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Main from './Main.jsx';
import BakeryHome from './BakeryHome.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';
import FaceBook from './FaceBook.jsx';
import BakeryCheckoutArea from './BakeryCheckoutArea.jsx';
import Purchase from './BakeryCheckoutPurchase.jsx';

import store, { history } from '../store/store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={BakeryHome}></IndexRoute>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/facebook" component={Contact}></Route>
      </Route>
      <Route path="/checkout" component={BakeryCheckoutArea}></Route>
      <Route path="/purchase" component={Purchase}></Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('bakeryContainer'));
