import { createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from '../reducers/index';

import recipes from '../../api/menuItems';

function getStateObject(recipes) {
  const breakfastAlaCarte = recipes.filter((item) => item['breakfastAlaCarte']);
  const breakfast = recipes.filter((item) => item['breakfast']);
  const boxedLunches = recipes.filter((item) => item['boxedLunches']);
  const entreeSalads = recipes.filter((item) => item['entreeSalads']);
  const gourmetTraysAndApps = recipes.filter((item) => item['gourmetTraysAndApps'] && item['alaCarteApps']);
  const main = recipes.filter((item) => item['mainSelections'] && item['cincinattiFavorites']);
  const pizzas = recipes.filter((item) => item['pizzas']);

  return {
    breakfastAlaCarte,
    breakfast,
    boxedLunches,
    entreeSalads,
    gourmetTraysAndApps,
    main,
    pizzas,
    checkoutCart: []
  };
}

// create an object for the default data
const defaultState = getStateObject(recipes.recipes);
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
