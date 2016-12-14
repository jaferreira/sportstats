var mongoose = require('mongoose');
var game = require('../../models/game')

mongoose.connect('mongodb://localhost:27017/matches');


exports.getAllGames = function (callback) {
    game.find(function (err, items) {
        if (err)
            console.log('[Repository.getAllGames] ' + err);

        console.log('------------------------------------------------------------------');

        callback(err, items);
    })
}
