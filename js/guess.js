var guessState = {

  create: function() {
    var question = game.add.text(game.world.centerX, 80, selectedChallenge.question, { font: '30px museo-sans-rounded', fill: '#FFF' });
    question.anchor.set(0.5);

    rectangle = new Phaser.Rectangle(100, 200, 600, 200);

    var points = [[1,1],[2,1],[3,1],[4,1],[5,1],[1,2],[2,2],[3,2],[4,2],[5,2]];
    console.log(points[0][0]);

    for (i = 0; i < points.length; i++) {
      console.log(points[i]);
      text = game.add.text((game.world.centerX - 150) + points[i][0] * 40, 200 + [points[i][1]] * 40, '•', { font: '40px museo-sans-rounded', fill: '#FFF'});
    }
  },

  keyPress: function(char) {
    console.log(char);
  }
};
