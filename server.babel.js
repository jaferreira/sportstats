import path from 'path';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import routes from './src/routes';
import { renderHTMLString } from '@sketchpixy/rubix/lib/node/router';
import RubixAssetMiddleware from '@sketchpixy/rubix/lib/node/RubixAssetMiddleware';

var mongoose = require('mongoose');
var config = require('./config');
var Game = require('./models/game');

const port = process.env.PORT || 8080;

let app = express();
 
mongoose.connect(config.database);
mongoose.connection.on('error', function () {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});


app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

function renderHTML(req, res) {
  renderHTMLString(routes, req, (error, redirectLocation, html) => {
    if (error) {
      if (error.message === 'Not found') {
        res.status(404).send(error.message);
      } else {
        res.status(500).send(error.message);
      }
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else {

      res.render('index', {
        content: html
      });
    }
  });
}


/**
 * GET /api/nextgames
 * 
 */
app.get('/api/nextgames', function (req, res, next) {

  console.log('Get ');
  Game.find()
    .limit(10)
    .exec(function (err, games) {
      if (err) {
        console.log('Get error!!! ' + err);
        return next(err);
      }
      console.log('Get returned!!! ' + games);
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
      awayTeam: 'Sporting CP',
      gameId: 'aasdasdsgasfasgfd'

    });

    game.save(function (err) {
      if (err) return next(err);
      res.send({ message: '[' + game.homeTeam + ' vs ' + game.awayTeam + '] has been added successfully!' });
    });
  } catch (e) {
    res.status(404).send({ message: characterName + ' is not a registered citizen of New Eden.' });
  }
});


app.get('*', RubixAssetMiddleware('ltr'), (req, res, next) => {
  renderHTML(req, res);
});






app.listen(port, () => {
  console.log(`Node.js app is running at http://localhost:${port}/`);
});





