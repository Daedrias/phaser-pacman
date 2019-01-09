export default class Pacman extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'pacman');
    scene.physics.world.enable(this);
    scene.add.existing(this);
    
    this.BASE_VEL = 300;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
  }

  moveUp() {
    this.angle = 90;
    this.body.velocity.y = -1 * this.BASE_VEL;
  }
  
  moveDown() {
    this.angle = (-90);
    this.body.velocity.y = this.BASE_VEL;
  }
  
  moveLeft() {
    this.angle = 0;
    this.body.velocity.x = -1 * this.BASE_VEL;
  }
  
  moveRight() {
    this.angle = 180;
    this.body.velocity.x = this.BASE_VEL;
  }
}

// Pacman(game, x, y) {
//   Phaser.Sprite.call(this, game, x, y, 'pacman');

//   this.BASE_VEL = 300;

//   this.anchor.setTo(0.5, 0.5);
//   game.physics.arcade.enable(this);
//   this.body.velocity.x = 0;
//   this.body.velocity.y = 0;

//   game.add.existing(this);
// };

// // extend from the Sprite class
// Pacman.prototype = Object.create(Phaser.Sprite.prototype);
// Pacman.prototype.constructor = Pacman;

// Pacman.prototype.update() {

// };

// Pacman.prototype.moveUp() {
//   this.angle = 90;
//   this.body.velocity.y = -1 * this.BASE_VEL;
// };

// Pacman.prototype.moveDown() {
//   this.angle = (-90);
//   this.body.velocity.y = this.BASE_VEL;
// };

// Pacman.prototype.moveLeft() {
//   this.angle = 0;
//   this.body.velocity.x = -1 * this.BASE_VEL;
// };

// Pacman.prototype.moveRight() {
//   this.angle = 180;
//   this.body.velocity.x = this.BASE_VEL;
// };
