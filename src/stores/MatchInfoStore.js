import alt from '../alt';
import MatchInfoActions from '../actions/MatchInfoActions';

class MatchInfoStore {
  constructor() {
    this.bindActions(MatchInfoActions);
    this.matchInfo = {};
  }

  onGetMatchInfoSuccess(data) {
    this.matchInfo = data;
  }

  onGetMachInfoFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(MatchInfoStore);