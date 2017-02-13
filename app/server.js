var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var nunjucks = require('nunjucks')
var app = express()
var shuffle = require('./modules/shuffle').shuffle
var levels = require('./data/levels').levels

nunjucks.configure('app', {
  autoescape: true,
  express: app
})

app.use(express.static(__dirname + '/public'));
app.use(cookieParser('asecretpassword'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function rollDice(dice) {
  var results = [];
  for (var i = 0, numTypes = dice.length; i < numTypes; i++) {
    var currentSet = dice[i];
    for (var d = 0; d < currentSet.number; d++) {
      var result = {
        type: currentSet.type,
        result: Math.floor(Math.random() * (currentSet.type - 1)) + 1
      };
      results.push(result);
    }
  }
  results = shuffle(results);
  return results;
}

app.get('/', function (req, res) {
  res.render('views/home.html')
})

app.get('/menu', function (req, res) {
  res.locals.levels = levels;
  res.render('views/menu.html')
})

app.get('/level/:levelId/:challengeId', function (req, res) {
  var level = levels[req.params.levelId - 1];
  var challenge = level.challenges[req.params.challengeId - 1];
  res.locals.results = rollDice(challenge.parameters.dice);

  var total = (function() {
    var sum = 0;
    for (var i = 0; i < res.locals.results.length; i++) {
      var result = res.locals.results[i];
      sum += result.result;
    }
    return sum;
  })();

  var options = {
      maxAge: 1000 * 60 * 15,
      signed: true
  }

  res.cookie('diceyRes', total, options);
  res.locals.refresh = {
    time: challenge.parameters.time,
    location: '/level/' + req.params.levelId + '/' + req.params.challengeId + '/guess'
  }
  res.render('views/challenge.html')
})

app.get('/level/:levelId/:challengeId/guess', function (req, res) {
  res.locals.levelId = req.params.levelId;
  res.locals.challengeId = req.params.challengeId;
  res.render('views/guess.html')
})

app.get('/level/:levelId/:challengeId/result', function (req, res) {
  var answer = req.signedCookies.diceyRes;
  res.locals.win = false;
  if (req.query.answer == answer) {
    res.locals.win = true;
  }
  var options = {
      maxAge: 1000 * 60 * 15,
      signed: true
  }
  res.cookie('diceyRes', null, options);
  console.log(req.signedCookies);
  res.render('views/result.html')
})

// JSON API

app.get('/api/levels', function(req, res) {
  res.json(levels);
})

app.get('/api/level/:levelId/:challengeId', function(req, res) {
  var level = levels[req.params.levelId - 1];
  var challenge = level.challenges[req.params.challengeId - 1];
  var results = rollDice(challenge.parameters.dice);
  res.json(results);
})

app.listen(3000, function () {
  console.log('Dicey listening on port 3000!')
})
