import alt from '../alt';
import GameListActions from '../actions/GameListActions';

class GameListStore {
  constructor() {
    this.bindActions(GameListActions);
    this.games = [];
  }

  onGetGamesSuccess(data) {
    this.games = data;
  }

  onGetGamesFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(GameListStore);