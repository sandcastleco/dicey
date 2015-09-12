var game = new Phaser.Game(800, 600, Phaser.AUTO, 'dicey' );

var selectedChallenge = {};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('landing', landingState);
game.state.add('challenge', challengeState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('guess', guessState);
game.state.start('boot');
