import alt from '../alt';

class GameListActions {
  constructor() {
    this.generateActions(
      'getGamesSuccess',
      'getGamesFail'
    );
  }

  getNextGames(payload) {
    let url = '/api/nextgames';

    $.ajax({ url: url })
      .done((data) => {
        console.log(this);
        this.getGamesSuccess(data);
      })
      .fail((jqXhr) => {
        this.getGamesFail(jqXhr);
      });
  }
}

export default alt.createActions(GameListActions);