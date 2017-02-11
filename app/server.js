var express = require('express')
var nunjucks = require('nunjucks')
var app = express()

nunjucks.configure('app', {
  autoescape: true,
  express: app
})

app.get('/', function (req, res) {
  res.render('views/home.html')
})

app.get('/menu', function (req, res) {
  res.render('views/menu.html')
})

app.listen(3000, function () {
  console.log('Dicey listening on port 3000!')
})
