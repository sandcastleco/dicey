var guessState = {

  create: function() {

    makeBackground();

    var question = game.add.text(game.world.centerX, 80, selectedChallenge.question, { font: '30px museo-sans-rounded', fill: '#808181' });
    question.anchor.set(0.5);

    var points = [[1,1],[2,1],[3,1],[4,1],[5,1],[1,2],[2,2],[3,2],[4,2],[5,2]];

    for (i = 0; i < points.length; i++) {
      text = game.add.text((game.world.centerX - 150) + points[i][0] * 40, 200 + [points[i][1]] * 40, '•', { font: '40px museo-sans-rounded', fill: '#808181'});
    }
  }
  
};
