var PhaserPacman = PhaserPacman || {};

Pacman = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'pacman');
};

// extend from the Sprite class
Pacman.prototype = Object.create(Phaser.Sprite.prototype);
Pacman.prototype.constructor = Pacman;

Pacman.prototype.update = function() {

};
