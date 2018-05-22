import React, { Component } from 'react';
import headerSrc from '../assets/header.jpeg';

import './HeaderPhoto.scss';

export default class HeaderPhoto extends Component {
  render() {
    return (
      <div className="header-photo">
        <img src={headerSrc} alt="" />
      </div>
    );
  }
}
