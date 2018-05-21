import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import mediaQueries from '../constants/mediaQueries';

export default class Navbar extends Component {
  render() {
    const activeStyle = { color: 'gray' };

    const navbarStyle = {
      height: '49px'
    };

    return (
      <div style={navbarStyle}>
        <Media query={mediaQueries.medium}>
          {matches =>
            matches ? (
              <div>
                <span>americanas.com</span>
              </div>
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
