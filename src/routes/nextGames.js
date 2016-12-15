import React from 'react';
import GameListStore from '../stores/GameListStore';
import GameListActions from '../actions/GameListActions';

class GameList extends React.Component {
  constructor(props) {
    console.log('---- CTOR 1 ----');
    super(props);
    console.log('---- CTOR 2 ----');
    this.state = GameListStore.getState();
    console.log('---- CTOR 3 ----');
    this.onChange = this.onChange.bind(this);
    console.log('---- CTOR 4 ----');
  }

  componentDidMount() {
    console.log('---- componentDidMount ----');
    GameListStore.listen(this.onChange);
    GameListActions.getNextGames();
  }

  componentWillUnmount() {
    console.log('---- componentWillUnmount ----');
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
    console.log('---- RENDER ----');
    let gamesList = this.state.games.map((game, index) => {
      return (
        <div>
          <h3>
            {game.nextGame.HomeTeam} vs {game.nextGame.AwayTeam} ({game.nextGame.HomeScores.length})

          </h3>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='list-group'>
          {gamesList}
        </div>
      </div>
    );
  }
}

export default GameList;