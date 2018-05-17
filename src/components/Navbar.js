import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const activeStyle = { color: 'gray' };

    return (
      <div>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Moments
        </NavLink>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Notifications
        </NavLink>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Messages
        </NavLink>
      </div>
    );
  }
}
