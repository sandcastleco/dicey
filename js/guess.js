var guessState = {

  create: function() {

    makeBackground();

    var f = document.createElement("form");
    f.setAttribute('id', 'my-form');
    f.setAttribute('method',"post");
    f.setAttribute('action',"submit.php");

    var i = document.createElement("input"); //input element, text
    i.setAttribute('id', 'my-input')
    i.setAttribute('type',"text");
    i.setAttribute('name',"username");

    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");

    f.appendChild(i);
    f.appendChild(s);

    //and some more input elements here
    //and dont forget to add a submit button

    document.getElementsByTagName('body')[0].appendChild(f);

    function processForm(e) {
      if (e.preventDefault) e.preventDefault();
      guess = document.getElementById('my-input').value;
      this.parentNode.removeChild(this);
      guessState.start()

      /* do what you want with the form */

      // You must return false to prevent the default form behavior
      return false;
    }

    var form = document.getElementById('my-form');
    if (form.attachEvent) {
      form.attachEvent("submit", processForm);
    } else {
      form.addEventListener("submit", processForm);
    }

    var question = game.add.text(game.world.centerX, 80, selectedChallenge.question, { font: '30px museo-sans-rounded', fill: '#808181' });
    question.anchor.set(0.5);

    //var points = [[1,1],[2,1],[3,1],[4,1],[5,1],[1,2],[2,2],[3,2],[4,2],[5,2]];

    //for (i = 0; i < points.length; i++) {
    //  text = game.add.text((game.world.centerX - 150) + points[i][0] * 40, 200 + [points[i][1]] * 40, '•', { font: '40px museo-sans-rounded', fill: '#808181'});
    //}
  },

  start: function() {
    game.state.start('result');
  }

};
