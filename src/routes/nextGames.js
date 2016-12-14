var repository = require('../data/repository');

import React from 'react';
import Game from './game'

export default class NextGames extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      nextGames: [],
    };

  };


  componentDidMount() {
    repository.getAllGames(function (err, games) {
      if (err)
        console.log('error in NextGames ctor');
      else {
        var dbData = [];
        for (var i = 0; i < games.length; i++) {
          dbData.push(<Game gameInfo={games[i]} />);
          this.setState({
            nextGames: dbData
          });
          console.log('setState!');
        }
      }
    });
  }


  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <p>Next Game's OLA</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <hr className='linha' />
          </div>
          <div className='col-md-2'>
            <p>CASA</p>
          </div>
          <div className='col-md-2'>
            <p>FORA</p>
          </div>
          <div className='col-md-4'>
            <hr className='linha2'></hr>
          </div>

          

        </div>
      </div>
    );
  }
}



