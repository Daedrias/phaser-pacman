var PhaserPacman = PhaserPacman || {};

PhaserPacman.Title = function() {
  console.log("%cStarting phaser pacman", "color:white; background:red");
};

PhaserPacman.Title.prototype = {
  preload: function() {
    // will be added before each relative path
    this.load.path = 'assets/';
    this.load.image('play', 'play.png'); // so assets/play.png
  },

  create: function() {
    var playButton = this.add.button(this.world.centerX, this.world.centerY, "play", this.playTheGame, this);
    playButton.scale.setTo(4, 4);
    playButton.anchor.setTo(0.5, 0.5);
  },

  playTheGame: function() {
    this.state.start("PhaserPacman.Main");
  }
};
