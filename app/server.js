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
            { type: 6, number: 10 }
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

app.get('/', function (req, res) {
  res.render('views/home.html')
})

app.get('/menu', function (req, res) {
  res.locals.levels = levels;
  res.render('views/menu.html')
})

app.get('/level/:levelId/:challengeId', function (req, res) {
  res.render('views/challenge.html')
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
