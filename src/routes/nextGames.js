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

  componentDidMount() {
    var result = this.props.result;
    var chartId = this.props.id;



    var allValues = result.map(function (item) {
      return Math.max(parseInt(item.homeResult), parseInt(item.awayResult));
    });

    console.log('All: ' +  allValues);
    
    
    var baselineValue = Math.max.apply(null,allValues);

    console.log('Baseline: ' + baselineValue);

    (() => {
      var chart = new Rubix('#' + chartId, {
        // title: 'Stacked bar chart with negative values',
        // subtitle: 'Profit/Expense chart',
        hideAxisAndGrid: true,
        hideLegend: true,
        titleColor: '#0080FF',
        subtitleColor: '#0080FF',
        height: 250,
        axis: {
          x: {
            type: 'ordinal'
          },
          y: {
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
        show_markers: false
      });

      var profit = chart.bar_series({
        color: '#0080FF'
      });

      profit.addData([
        { x: '1', y: (-0.1 - result[0].homeResult) / baselineValue },
        // { x: 'Jan', y: -0.1 - result[1].homeResult },
        { x: '2', y: (-0.1 - result[2].homeResult) / baselineValue },
        { x: '3', y: (-0.1 - result[3].homeResult) / baselineValue },
        { x: '4', y: (-0.1 - result[4].homeResult) / baselineValue }
      ]);

      var expenses = chart.bar_series({
        name: this.props.text,
        color: '#FF6666',
        marker: 'square'
      });

      expenses.addData([
        { x: '1', y: (result[0].awayResult) / baselineValue },
        // { x: 'Jan', y: result[1].awayResult },
        { x: '2', y: (result[2].awayResult) / baselineValue },
        { x: '3', y: (result[3].awayResult) / baselineValue },
        { x: '4', y: (result[4].awayResult) / baselineValue },
      ]);
    })();
  }

  render() {


    return (
      <div id={this.props.id}></div>
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
      var gamesBetweenValues = [];
      var gamesBetweenInfo = [];
      for (var i = 0; i < game.nextGame.GamesBetweenTeams.length; i++) {
        if (game.nextGame.GamesBetweenTeams[i].Result.indexOf('ET') > -1)
          continue;

        var resultValues = game.nextGame.GamesBetweenTeams[i].Result.split('-');
        gamesBetween.push(<p>{game.nextGame.GamesBetweenTeams[i].Result}</p>);
        gamesBetweenValues.push({
          homeResult: resultValues[0],
          awayResult: resultValues[1]
        });
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
                <div className='col-md-2'>
                  <img src={'/imgs/teams/' + game.nextGame.HomeTeam + '.png'} width='125px' />
                </div>

                <div className='col-md-8'>
                  <div className='row'>
                    <div className='col-md-1'>
                      <div className='dist'>
                        {gamesBetweenInfo.slice(0, 5)}
                      </div>
                    </div>

                    <div className='col-md-10'>
                      <Chart id='lastGames_1' result={gamesBetweenValues} />
                    </div>

                    <div className='col-md-1'>
                      <div className='res'>
                        {gamesBetween.slice(0, 5)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-2'>
                  <img src={'/imgs/teams/' + game.nextGame.AwayTeam + '.png'} width='125px' />
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
          {gamesList}
        </div>
      </div>
    );
  }
}

export default GameList;