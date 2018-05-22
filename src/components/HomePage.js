import React, { Component } from 'react';
import TimelineContainer from '../containers/TimelineContainer';
import ProfileInfo from './ProfileInfo';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ProfileInfo />
        {/* <TimelineContainer /> */}
      </div>
    );
  }
}
