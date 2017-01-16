var PhaserPacman = PhaserPacman || {};

PhaserPacman.Main = function(game) {
  this.SCALE = 2;

};

PhaserPacman.Main.prototype = {
  preload: function() {
    this.world.scale.set(this.SCALE);
    this.load.tilemap('maze', 'tilemaps/maze.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('maze_tileset', 'maze_tileset.png');
    this.load.image('gum', 'gum.png');
    this.load.image('supergum', 'supergum.png');
  },
  create: function() {

    this.map = this.game.add.tilemap('maze');
    this.map.addTilesetImage('maze_tileset', 'maze_tileset');

    this.backgroundLayer = this.map.createLayer('background');
    this.wallsLayer = this.map.createLayer('walls');

    //resizes the game world to match the layer dimensions
    this.backgroundLayer.resizeWorld();

    // collision on blockedLayer
    //  this.map.setCollision([1], true, this.wallslayer);
    this.map.setCollisionBetween(1, 100, true, this.wallslayer);

    // create sprite for all the gums in the corresponding object layer. for me api doc is misleading.
    // the first 'gums' is the object layer name in tiled
    // the second parameter is the name attribute of the object in tiled
    // the third one is the sprite that will be used
    this.map.createFromObjects('gums', 'gum', 'gum');
    this.map.createFromObjects('supergums', 'supergum', 'supergum');
  },
  update: function() {},
  shutDowm: function() {}
};
