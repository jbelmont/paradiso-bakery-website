import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addressInfo: [
        {addr: '513.231.2780', class: 'contact__container-telephone'}, 
        {addr: '6732 Clough Pike Cincinnati, OH 45244', class: 'contact__container-address'}, 
        {addr: 'info@jeanpaulsparadisocafe.com', class: 'contact__container-email'}
      ]
    };
  }
  render() {
    const {addressInfo} = this.state;
    const info = (addressInfo.map(info => <div className={info['class']}>{info['addr']}</div>));
    return (
      <div className="contact__container">
        {info}
      </div>
    );
  }

}

export default Contact;
