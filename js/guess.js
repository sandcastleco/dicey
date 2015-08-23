var guessState = {

  create: function() {
    var question = game.add.text(game.world.centerX, 80, selectedChallenge.question, { font: '30px Bree', fill: '#FFF' });
    question.anchor.set(0.5);
    alert("The answer is " + total);
  }
};
