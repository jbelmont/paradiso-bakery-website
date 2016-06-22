import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import BakeryHeader from './BakeryHeader.jsx';
import BakeryBody from './BakeryBody.jsx';
import BakeryFooter from './BakeryFooter.jsx';


class Bakery extends Component {

  render() {
    return (
      <div className="bakery__container-block">
        <span>Text Here</span>
      </div>
    );
  }

}

ReactDOM.render(
  <Bakery />,
  document.getElementById('bakery__container')
);
