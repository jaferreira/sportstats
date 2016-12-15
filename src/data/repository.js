var mongoose = require('mongoose');
var game = require('../../models/game')



exports.getAllGames = function (callback) {
    game.find(function (err, items) {
        if (err)
            console.log('[Repository.getAllGames] ' + err);
            
        callback(err, items);
    })
}
