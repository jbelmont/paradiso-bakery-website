import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Bakery from './Bakery';

function mapStateToProps(state) {
  return {
    breakfastAlaCarte: state["breakfastAlaCarte"],
    breakfast: state["breakfast"],
    boxedLunches: state["boxedLunches"],
    entreeSalads: state["entreeSalads"],
    gourmetTraysAndApps: state["gourmetTraysAndApps"],
    main: state["main"],
    pizzas: state["pizzas"],
    checkoutItems: {}
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(Bakery);

export default Main;
