import React, { Component } from 'react';
import photoSrc from '../assets/profile.jpg';

import './ProfilePhoto.scss';

export default class ProfilePhoto extends Component {
  render() {
    return (
      <span className="profile-photo">
        <img src={photoSrc} alt="" />
      </span>
    );
  }
}
