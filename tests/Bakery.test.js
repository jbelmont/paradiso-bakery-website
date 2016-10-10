jest.unmock('../BasicPage');

import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';

import MenuSideBar from '../static/js/components/MenuSideBar.jsx';

test('Show Links in Main bakery site', () => {
  const menuitems = ['Breakfast', 'Breakfast Ala Carte','Boxed Lunches', 'Entree Salads', 'Gourmet Trays and Appetizers', 'Main Selections', 'Pizzas'];
  const page = TestUtils.renderIntoDocument(<MenuSideBar menuitems={menuitems} />);
  const button = TestUtils.findRenderedDOMComponentWithTag(page, 'button');
  expect(ReactDOM.findDOMNode(button).textContent).toBe('Login');
});
