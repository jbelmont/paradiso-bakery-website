import React, { Component } from 'react';

class FaceBook extends Component {

  static propTypes = {
    url: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.facebook.com/JeanPaulsParadiso/'
    };
  }

  shouldComponentUpdate(nextProps) {
    return this.state.url !== nextProps.url;
  }

  render() {
    const {
      url
    } = this.state;
    return React.createElement('iframe',
      {
        ref: 'iframe',
        frameBorder: '0',
        src: this.state.url
      }
    );
  }

}

export default FaceBook;
