import React, { Component } from 'react';

class BakeryHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imagesPath: './build/paradiso.jpg'
    }
  }

  render() {
    return (
      <div className="bakery__body-container">
        <div className="bakery__body-container-main-image">
          <img src={this.state.imagesPath} alt="Paradiso Pastry Chef" />
        </div>
      </div>
    );
  }
}

export default BakeryHome;
