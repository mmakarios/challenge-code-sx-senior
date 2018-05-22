import React, { Component } from 'react';
import './FollowButton.scss';

export default class FollowButton extends Component {
  render() {
    return (
      <span className="follow-button">
        <a href="#">Follow</a>
      </span>
    );
  }
}
