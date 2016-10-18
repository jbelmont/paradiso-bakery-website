import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import breakfast from './breakfast';
import boxedLunches from './boxedLunches';
import breakfastAlaCarte from './breakfastAlaCarte';
import entreeSalads from './entreeSalads';
import gourmetTraysAndApps from './gourmetTraysAndApps';
import main from './main';
import pizzas from './pizzas';

export const rootReducer = combineReducers(
  { breakfast, breakfastAlaCarte, boxedLunches, entreeSalads, gourmetTraysAndApps, main, pizzas, routing: routerReducer }
);

export default rootReducer;
