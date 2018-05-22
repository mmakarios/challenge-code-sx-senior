import React, { Component } from 'react';
import DisplayName from './DisplayName';
import Username from './Username';
import locationIcon from '../assets/twitter-newui-iconkit/twitter-location.svg';
import linkIcon from '../assets/twitter-newui-iconkit/twitter-link.svg';
import './ProfileInfo.scss';

export default class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-info">
        <DisplayName />
        <Username />
        <p className="description">
          A maior loja na palma da sua mão:{' '}
          <a href="goo.gl/Ntg9wN">goo.gl/Ntg9wN</a>
        </p>
        <div className="info-icons">
          <div>
            <img src={locationIcon} alt="location icon" /> <span>Brasil</span>
          </div>
          <div>
            <img src={linkIcon} alt="link icon" />
            <span>
              <a href="https://www.americanas.com.br/">americanas.com</a>
            </span>
          </div>
        </div>
        <div className="follows">
          <span>
            <span className="count">5,917</span> Following
          </span>
          <span>
            <span className="count">264,050</span> Followers
          </span>
        </div>
      </div>
    );
  }
}
