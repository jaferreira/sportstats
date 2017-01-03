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

    // var allValues = result.map(function (item) {
    //   return Math.max(parseInt(item.homeResult), parseInt(item.awayResult));
    // });

    // console.log('All: ' +  allValues);
    // var baselineValue = Math.max.apply(null,allValues);
    var zeroBaseLine = 0.1;
    var baselineValue = 15;

    
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

      var homeInfo = chart.bar_series({
        color: '#0080FF'
      });
      homeInfo.addData([
        { x: '1', y: (-zeroBaseLine - result[0].homeResult) / baselineValue },
        { x: '2', y: (-zeroBaseLine - result[1].homeResult) / baselineValue },
        { x: '3', y: (-zeroBaseLine - result[2].homeResult) / baselineValue },
        { x: '4', y: (-zeroBaseLine - result[3].homeResult) / baselineValue },
        { x: '5', y: (-zeroBaseLine - result[4].homeResult) / baselineValue }
      ]);


      var awayInfo = chart.bar_series({
        name: this.props.text,
        color: '#FF6666',
        marker: 'square'
      });
      awayInfo.addData([
        { x: '1', y: (zeroBaseLine + result[0].awayResult) / baselineValue },
        { x: '2', y: (zeroBaseLine + result[1].awayResult) / baselineValue },
        { x: '3', y: (zeroBaseLine + result[2].awayResult) / baselineValue },
        { x: '4', y: (zeroBaseLine + result[3].awayResult) / baselineValue },
        { x: '5', y: (zeroBaseLine + result[4].awayResult) / baselineValue }
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
      
      var matchInfoUrl = '/matchinfo/' + game.permaLink;

      var gamesBetween = [];
      var gamesBetweenValues = [];
      var gamesBetweenInfo = [];
      for (var i = 0; i < game.nextGameStats.gamesBetweenTeams.length; i++) {
        if (game.nextGameStats.gamesBetweenTeams[i].Result.indexOf('ET') > -1)
          continue;

        var resultValues = game.nextGameStats.gamesBetweenTeams[i].Result.split('-');
        console.log(game.awayTeam);
        gamesBetween.push(<p>{game.nextGameStats.gamesBetweenTeams[i].Result}</p>);
        gamesBetweenValues.push({
          homeResult: resultValues[0],
          awayResult: resultValues[1]
        });
        gamesBetweenInfo.push((game.nextGameStats.gamesBetweenTeams[i].SameHomeTeam) ? <p>Casa</p> : <p>Fora</p>);
      }

      return (
        <div >
          <li>
            <a href={matchInfoUrl}>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='data'>
                    {game.date} ({game.hour}) 
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-12'>
                  <div className='conf'>
                    Confronto Directo - Últimos
                  </div>
                </div>
              </div>

              <div className='row pad'>                 
                <div className='col-sm-12'>                   
                  <div className='ola'>                     
                    <div className='imagem'>                       
                      <img src={'/imgs/teams/' + game.homeTeam + '.png'} width='65%' />                       
                      <div className='equipa'>                         
                        {game.homeTeam}                       
                      </div>                    
                    </div>                     
                    <div className='grafico'>                       
                      <Chart id={game._id} result={gamesBetweenValues} />                     
                    </div>                     
                    <div className='imagem2'>                       
                      <img src={'/imgs/teams/' + game.awayTeam + '.png'} width='65%' />                       
                      <div className='equipa'>                         
                        {game.awayTeam} 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <hr className='separar' />
        </div>
      );
    });

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <p className='titulo'> Next Game´s </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>         
           <div className='conteudo'>               
            <hr className='linha' />               
            <hr className='linha2' />             
           </div>           
          </div>
          {gamesList}
        </div>
      </div>
    );
  }
}

export default GameList;