import React, { Component } from 'react';
import verified from '../assets/verified.svg';
import './DisplayName.scss';

export default class DisplayName extends Component {
  render() {
    return (
      <span className="display-name">
        <span>americanas.com</span>
        <img src={verified} alt="verified badge" />
      </span>
    );
  }
}
