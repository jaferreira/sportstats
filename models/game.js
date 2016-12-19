var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  sport: String,
  competition: String,

  date: Date,
  hour: String,

  homeTeam: String,
  awayTeam: String,
  result: String,

  url: String,
  scrapped: Boolean,

  gameId: String,
  permaLink: String,

  nextGameStats: mongoose.Schema.Types.Mixed,
  gameStats: mongoose.Schema.Types.Mixed

});

module.exports = mongoose.model('Game', gameSchema);