import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import BakeryHeader from 'BakeryHeader.jsx';
import BakeryBody from 'BakeryBody.jsx';
import BakeryFooter from 'BakeryFooter.jsx';


class Bakery extends Component {

  render() {
    return !this.props.error ? (
      <div>
        <BakeryHeader />
        <BakeryBody />
        <BakeryFooter />
      </div>
    ) : this.props.children;
  }

}

ReactDOM.render(
  <Bakery />,
  document.getElementById('bakery__container')
);
