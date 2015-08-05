var game = new Phaser.Game(800, 600, Phaser.AUTO, 'dicey', { preload: preload, create: create, update: update });

function preload() {

}

function create() {
  gameTitle = game.add.text(350, 300, 'Dicey', { fontSize: '50px', fill: '#FFF' })
}

function update() {

}
