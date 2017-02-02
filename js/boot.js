var PhaserPacman = PhaserPacman || {};

PhaserPacman.Boot = function() {

};

PhaserPacman.Boot.prototype = {
  init: function() {
    this.input.maxPointers = 1;
    //this.scale.pageAlignHorizontally = true;
    //this.scale.pageAlignVertically = true;

    // scale the whole game. FInally didn't have to make bigger sprites...
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.setUserScale(1, 1);
    this.game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);


    //this.game.stage.backgroundColor = "#4488AA";
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

  },
  create: function() {
    this.state.start('PhaserPacman.Title');
  }
};
