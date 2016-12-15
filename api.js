// Babel ES6/JSX Compiler
require('babel-register');

var path = require('path');
var express = require('express');

var compression = require('compression');

var bodyParser = require('body-parser');
var async = require('async');
var colors = require('colors');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');


var _ = require('underscore');

var config = require('./config');
var routes = require('./src/routes');
var Game = require('./models/game');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function () {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.set('port', process.env.PORT || 3000);
app.use(compression());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * GET /api/nextgames
 * 
 */
app.get('/api/nextgames', function (req, res, next) {
    console.log('Get called!!!');
    Game.find()
        .limit(10)
        .exec(function (err, games) {
            if (err) return next(err);

            return res.send(games);
        });
});

/**
 * POST /api/game
 * Adds new game to the database.
 */
app.post('/api/game', function (req, res, next) {
    try {

        var game = new Game({
            homeTeam: 'Benfica',
            awayTeam: 'Sporting CP'
        });

        game.save(function (err) {
            if (err) return next(err);
            res.send({ message: '[' + game.homeTeam + ' vs ' + game.awayTeam + '] has been added successfully!' });
        });
    } catch (e) {
        res.status(404).send({ message: characterName + ' is not a registered citizen of New Eden.' });
    }
});

app.use(function (req, res) {
    Router.match({ routes: routes.default, location: req.url }, function (err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.use(function (err, req, res, next) {
    console.log(err.stack.red);
    res.status(err.status || 500);
    res.send({ message: err.message });
});


var server = require('http').createServer(app);

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
