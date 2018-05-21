import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import mediaQueries from '../constants/mediaQueries';
import DisplayName from './DisplayName';
import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    const activeStyle = { color: 'gray' };

    return (
      <div id="navbar">
        <Media query={mediaQueries.medium}>
          {matches =>
            matches ? (
              <DisplayName />
            ) : (
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
            )
          }
        </Media>
      </div>
    );
  }
}
