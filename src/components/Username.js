import React, { Component } from 'react';
import verified from '../assets/verified.svg';
import './Username.scss';

export default class Username extends Component {
  render() {
    return (
      <span className="username">
        <span>americanas.com</span>
        <img src={verified} alt="verified badge" />
      </span>
    );
  }
}
