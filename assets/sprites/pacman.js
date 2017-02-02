var PhaserPacman = PhaserPacman || {};

Pacman = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'pacman');

  this.BASE_VEL = 300;

  this.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(this);
  this.body.velocity.x = 0;
  this.body.velocity.y = 0;

  game.add.existing(this);
};

// extend from the Sprite class
Pacman.prototype = Object.create(Phaser.Sprite.prototype);
Pacman.prototype.constructor = Pacman;

Pacman.prototype.update = function() {

};

Pacman.prototype.moveUp = function() {
  this.angle = 90;
  this.body.velocity.y = -1 * this.BASE_VEL;
};

Pacman.prototype.moveDown = function() {
  this.angle = (-90);
  this.body.velocity.y = this.BASE_VEL;
};

Pacman.prototype.moveLeft = function() {
  this.angle = 0;
  this.body.velocity.x = -1 * this.BASE_VEL;
};

Pacman.prototype.moveRight = function() {
  this.angle = 180;
  this.body.velocity.x = this.BASE_VEL;
};
