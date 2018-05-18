import React, { Component } from 'react';
import { stateTypes } from '../types/indexTypes';

export default class Timeline extends Component {
  static propTypes = { ...stateTypes };

  componentWillMount() {
    const { data, index } = this.props;
    if (!data) index();
  }

  render() {
    const { data, error, isFetching } = this.props;

    if (error) {
      return <div>Ocorreu um erro ao buscar os tweets.</div>;
    } else if (isFetching) {
      return <div>Carregando tweets...</div>;
    }

    return (
      <div>
        {data.map(tweet => {
          return <h3 key={tweet.id}>{tweet.text}</h3>;
        })}
      </div>
    );
  }
}
