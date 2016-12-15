import React from 'react';
import GameListStore from '../stores/GameListStore';
import GameListActions from '../actions/GameListActions';

import {
  Row,
  Col,
  Panel,
  PanelBody,
  PanelContainer,
} from '@sketchpixy/rubix';

class Chart extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 25}}>
            <div id={this.props.id}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}


class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = GameListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    GameListStore.listen(this.onChange);
    GameListActions.getNextGames();

    (() => {
      var chart = new Rubix('#stacked-multi-series-bar-chart-negative', {
        title: 'Stacked bar chart with negative values',
        subtitle: 'Profit/Expense chart',
        titleColor: '#0080FF',
        subtitleColor: '#0080FF',
        height: 300,
        axis: {
          x: {
            type: 'ordinal'
          },
          y:  {
            type: 'linear',
            tickFormat: ',.0f',
            label: 'Revenue',
            tickCount: 5
          }
        },
        tooltip: {
          color: 'white',
          format: {
            y: ',.0f'
          }
        },
        show_markers: true
      });

      var profit = chart.bar_series({
        name: 'Profit',
        color: '#0080FF'
      });

      profit.addData([
        {x: 'Jan', y: 30000},
        {x: 'Feb', y: 25000},
        {x: 'Mar', y: 25000},
        {x: 'Apr', y: 30000},
        {x: 'May', y: 65000},
        {x: 'Jun', y: 15000}
      ]);

      var expenses = chart.bar_series({
          name: 'Expense',
          color: '#FF6666',
          marker: 'square'
      });

      expenses.addData([
        {x: 'Jan', y: -35000},
        {x: 'Feb', y: -10000},
        {x: 'Mar', y: -10000},
        {x: 'Apr', y: -15000},
        {x: 'May', y: -15000},
        {x: 'Jun', y: -5000}
      ]);
    })();
  }

  componentWillUnmount() {
    GameListStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    // console.log('---- componentDidUpdate ----');
    // GameListActions.getNextGames();
  }

  onChange(state) {
    console.log(state);
    this.setState(state);
  }

  render() {
    let gamesList = this.state.games.map((game, index) => {
      var matchInfoUrl = '/matchinfo/' + game.nextGame.gameId;

      var gamesBetween = [];
      var gamesBetweenInfo = [];
      for (var i = 0; i < game.nextGame.GamesBetweenTeams.length; i++) {
        gamesBetween.push(<p>{game.nextGame.GamesBetweenTeams[i].Result}</p>);
        gamesBetweenInfo.push((game.nextGame.GamesBetweenTeams[i].SameHomeTeam) ? <p>Casa</p> : <p>Fora</p>);
      }


      return (
        <div key={game.nextGame.gameId}>
          <li>
            <a href={matchInfoUrl}>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='data'>
                    {game.nextGame.MatchDate} ({game.nextGame.MatchHour}) – {game.nextGame.Competition.name}
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-12'>
                  <div className='conf'>
                    Confronto Directo - Últimos
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-3'>
                  <img src='/imgs/app/avatars/avatar.jpg' width='125px' />
                </div>

                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='dist'>
                        {gamesBetweenInfo.slice(0, 5)}
                      </div>
                    </div>

                    <div className='col-md-4'>
                    </div>

                    <div className='col-md-4'>
                      <div className='res'>
                        {gamesBetween.slice(0, 5)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-3'>
                  <img src='/imgs/app/avatars/avatar.jpg' width='125px' />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-3'>
                  <div className='equipa'>
                    {game.nextGame.HomeTeam}
                  </div>
                </div>

                <div className='col-md-6'>
                </div>

                <div className='col-md-3'>
                  <div className='equipa'>
                    {game.nextGame.AwayTeam}
                  </div>
                </div>
              </div>
            </a>
          </li>
          <br />
          <br />
          <hr className='separar' />
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p className='titulo'> Next Game's OLA</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <hr className='linha' />
          </div>
          <div className='col-md-2'>
            <p className='casa'> CASA</p>
          </div>
          <div className='col-md-2'>
            <p className='casa'> FORA</p>
          </div>
          <div className='col-md-4'>
            <hr className='linha2' />
          </div>
          { gamesList }
        </div>

        <Chart id='stacked-multi-series-bar-chart-negative' />
      </div>
      
       
    );
  }
}

export default GameList;