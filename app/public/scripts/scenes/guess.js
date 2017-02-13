var guessScene = new Scene();

guessScene.draw = function() {
  game.element.innerHTML += "<h2>Guess!</h2>";
  game.element.innerHTML += "<h3>What was the total?</h3>";
  this.drawForm();
}

function getAnswer(cb) {
  var apiStr = '/answer';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiStr);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      var answer = JSON.parse(xhr.responseText)
      cb(answer);
    }
  };
  xhr.send();
}

guessScene.drawForm = function() {
  game.element.innerHTML += "\
    <form id='guess-form'>\
      <input type='text' id='answer'>\
      <button type='submit'>Answer</button>\
    </form>";

  var guessForm = document.getElementById("guess-form");
  var answerInput = document.getElementById("answer");
  guessForm.addEventListener('submit', function(e) {
    e.preventDefault();
    getAnswer(function(answer) {
      console.log(answerInput.value);
      var win = false;
      if (answerInput.value === answer) {
        win = true;
      }
      game.setScene(resultScene, { win: win });
    })
  })
}
