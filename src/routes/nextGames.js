var repository = require('../data/repository');

import React from 'react';
import Game from './game'

export default class NextGames extends React.Component {

  constructor(props, context) {
    super(props, context);


    var emptyData = { homeTeam: '--', awayTeam: '--' };

    this.state = {
      nextGames: [<Game gameInfo={emptyData} />]
    };

  };

  onChange(state) {
    this.setState(state);
  }

  componentWillMount() {
    console.log('componentDidMount');
    setTimeout(function () {
      var games = [
        { homeTeam: 'Benfica', awayTeam: 'Sporting CP' },
        { homeTeam: 'Moreirense', awayTeam: 'Porto' }];

      this.setState({
        nextGames: games
      });
      console.log('---------------------------------------------- setState! --------------------------------------------');
    }.bind(this), 3000);
    // repository.getAllGames(function (err, games) {
    //   if (err)
    //     console.log('error in NextGames ctor');
    //   else {
    //     var dbData = [];
    //     for (var i = 0; i < games.length; i++) {
    //       dbData.push(<Game gameInfo={games[i]} />);
    //       this.setState({
    //         nextGames: dbData
    //       });
    //       console.log('setState!');
    //     }
    //     render();
    //   }
    // });
  }

  componentDidMount() {
    console.log('============================================ componentWillMount ===============================');
  }

  // componentDidMount() {
  //   console.log('============================================ componentWillUpdate ===============================');
  // }

  componentWillReceiveProps(nextProps) {
    console.log('============================================ componentWillReceiveProps ===============================');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('============================================ shouldComponentUpdate ===============================');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('============================================ componentWillUpdate ===============================');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('============================================ componentDidUpdate ===============================');
  }

  componentWillUnmount() {
    console.log('============================================ componentWillUnmount ===============================');
  }

  fetchData() {
    setTimeout(function () {
      var games = [
        { homeTeam: 'Benfica', awayTeam: 'Sporting CP' },
        { homeTeam: 'Moreirense', awayTeam: 'Porto' }];

      this.onChange({
        nextGames: games
      });
      console.log('---------------------------------------------- setState! --------------------------------------------');
    }, 3000);
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
          <div>
            {this.state.nextGames}
          </div>
        </div>
      </div>
    );
  }
}

