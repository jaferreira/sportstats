var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  Competition: String,
  Date: Date,
  Hour: String,
  HomeTeam: String,
  AwayTeam: String,
  Result: String,
  Url: String,
  Scrapped: Boolean,
  gameId: String
});

module.exports = mongoose.model('Game', gameSchema);