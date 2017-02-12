var express = require('express')
var nunjucks = require('nunjucks')
var app = express()

nunjucks.configure('app', {
  autoescape: true,
  express: app
})

app.use(express.static(__dirname + '/public'));

var levels = [
  {
    id: 1,
    name: "Example level 1",
    challenges: [
      {
        id: 1,
        parameters: {
          time: 3000,
          dice: [
            { type: 12, number: 3 },
            { type: 6, number: 3 }
          ]
        }
      },
      {
        id: 2,
        parameters: {
          time: 5000,
          dice: [
            { type: 6, number: 15 }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    name: "Example level 2",
    challenges: [
      {
        id: 1,
        parameters: {
          time: 3000,
          dice: [
            { type: 6, number: 10 }
          ]
        }
      }
    ]
  }
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

app.get('/', function (req, res) {
  res.render('views/home.html')
})

app.get('/menu', function (req, res) {
  res.locals.levels = levels;
  res.render('views/menu.html')
})

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

app.get('/level/:levelId/:challengeId', function (req, res) {
  var level = levels[req.params.levelId - 1];
  var challenge = level.challenges[req.params.challengeId - 1];
  res.locals.results = rollDice(challenge.parameters.dice);
  res.render('views/challenge.html')
})

app.get('/api/level/:levelId/:challengeId', function(req, res) {
  var level = levels[req.params.levelId - 1];
  var challenge = level.challenges[req.params.challengeId - 1];
  var results = rollDice(challenge.parameters.dice);
  res.json(results);
})

app.get('/level/:levelId/:challengeId/guess', function (req, res) {
  res.render('views/guess.html')
})

app.get('/level/:levelId/:challengeId/result', function (req, res) {
  res.render('views/result.html')
})

app.get('/api/levels', function(req, res) {
  res.json(levels);
})

app.listen(3000, function () {
  console.log('Dicey listening on port 3000!')
})
