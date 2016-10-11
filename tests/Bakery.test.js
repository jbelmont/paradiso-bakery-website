import renderer from 'react-test-renderer';
import React from 'react';

import MenuSideBar from '../static/js/components/MenuSideBar.jsx';

test('Show Links in Main bakery site', () => {
  const menuitems = ['Breakfast', 'Breakfast Ala Carte','Boxed Lunches', 'Entree Salads', 'Gourmet Trays and Appetizers', 'Main Selections', 'Pizzas'];
  const tree = renderer.create(
    <MenuSideBar menuitems={menuitems} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
