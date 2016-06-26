import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import BakeryHeader from './BakeryHeader.jsx';
import BakeryBody from './BakeryBody.jsx';
import BakeryFooter from './BakeryFooter.jsx';


class Bakery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bakery__container-block">
        <BakeryHeader />
        <BakeryBody />
        <BakeryFooter />
      </div>
    );
  }

}

ReactDOM.render(
  <Bakery />,
  document.getElementById('bakeryContainer')
);
