import React, { Component } from 'react';
import TimelineContainer from '../containers/TimelineContainer';
import ProfileInfo from './ProfileInfo';

import './HomePage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <ProfileInfo />
        {/* <TimelineContainer /> */}
      </div>
    );
  }
}
