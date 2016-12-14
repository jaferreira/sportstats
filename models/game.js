var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  awayTeam: String,
  homeTeam: String
});

module.exports = mongoose.model('Game', gameSchema);