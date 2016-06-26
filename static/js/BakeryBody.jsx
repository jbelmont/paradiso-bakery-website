import React, { Component } from 'react';

export default class BakeryBody extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bakery__body-container">
        <div className="bakery__body-container-items">
          <div className="bakery__body-container-items-text"></div>
        </div>
        <div className="bakery__body-container-pastries"></div>
      </div>
    );
  }

}
