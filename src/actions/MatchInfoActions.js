import alt from '../alt';

class MatchInfoActions {
  constructor() {
    this.generateActions(
      'getMatchInfoSuccess',
      'getMachInfoFail'
    );
  }

  getMatchInfo(permaLink) {
    let url = '/api/matchinfo/' + permaLink;

    $.ajax({ url: url })
      .done((data) => {
        this.getMatchInfoSuccess(data);
      })
      .fail((jqXhr) => {
        this.getMachInfoFail(jqXhr);
      });
  }
}

export default alt.createActions(MatchInfoActions);