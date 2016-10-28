import React, { Component } from 'react';

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userProfile: "./build/symbol-defs.svg#icon-user3"
    }
  }

  render() {
    return (
      <span className="bakery__header-container-action-user">
        <svg xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref={this.state.userProfile}></use>
        </svg>
      </span>
    );
  }

}

export default UserProfile;
