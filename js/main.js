var PhaserPacman = PhaserPacman || {};

PhaserPacman.Main = function(game) {
  this.PACMAN_VEL = 300;
};

PhaserPacman.Main.prototype = {
  preload: function() {
    this.load.tilemap('maze', 'tilemaps/maze.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('maze_tileset', 'maze_tileset_32x32.png');
    this.load.image('gum', 'gum.png');
    this.load.image('supergum', 'supergum.png');
    this.load.image('pacman', 'pacman.png');
  },
  create: function() {

    this.map = this.game.add.tilemap('maze');
    this.map.addTilesetImage('maze_tileset', 'maze_tileset');


    this.backgroundLayer = this.map.createLayer('background');
    this.wallsLayer = this.map.createLayer('walls');

    //resizes the game world to match the layer dimensions
    this.wallsLayer.resizeWorld();

    // collision on blockedLayer
    //  this.map.setCollision([1], true, this.wallsLayer);
    this.map.setCollisionBetween(0, 100, true, this.wallsLayer);
    //  this.map.setCollision(40);

    this.createGumSprites();

    this.pacman = new Pacman(this.game, this.world.centerX, 848);
    this.cursors = this.game.input.keyboard.createCursorKeys();


  },
  update: function() {
    // nope, you can`'t pass thru walls
    this.game.physics.arcade.collide(this.pacman, this.wallsLayer);
    // collect gums while passing on it
    this.game.physics.arcade.overlap(this.pacman, this.gums, this.collectGum, null, this);
    // collect gums while passing on it
    this.game.physics.arcade.overlap(this.pacman, this.supergums, this.collectSuperGum, null, this);

    //pacman movement
    if (this.cursors.up.isDown) {
      this.pacman.moveUp();
    } else if (this.cursors.down.isDown) {
      this.pacman.moveDown();
    }
    if (this.cursors.left.isDown) {
      this.pacman.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.pacman.moveRight();
    }
  },
  render: function() {

  },

  shutDowm: function() {},

  createGumSprites: function() {
    this.gums = this.game.add.group();
    this.supergums = this.game.add.group();

    this.gums.enableBody = true;
    this.supergums.enableBody = true;

    // create sprite for all the gums in the corresponding object layer. for me api doc is misleading.
    // the first 'gums' is the object layer name in tiled
    // the second parameter is the name attribute of the object in tiled
    // the third one is the sprite that will be used
    this.map.createFromObjects('gums', 'gum', 'gum', 0, true, false, this.gums);
    this.map.createFromObjects('supergums', 'supergum', 'supergum', 0, true, false, this.supergums);
  },
  collectGum: function(pacman, gum) {
    gum.kill();
    this.checkRemainingGums();
  },
  collectSuperGum: function(pacman, supergum) {
    supergum.kill();
    this.checkRemainingGums();
  },
  checkRemainingGums: function() {
    if (this.gums.total === 0 && this.supergums.total === 0) {
      this.gameOver();
    }
  },
  gameOver: function() {
    console.log('Game Over!');
  },
  debugMode: function() {
    this.game.debug.body(this.pacman);
    this.wallsLayer.debug = true;
  }
};
