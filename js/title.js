title = function(game) {
  console.log("%cStarting phaser pacman", "color:white; background:red");

};

title.prototype = {
  preload: function() {
    game.load.image('play', 'assets/play.png');
  },

  create: function() {
    var playButton = this.game.add.button(game.world.centerX, game.world.centerY, "play", this.playTheGame, this);
    playButton.scale.setTo(4, 4);
    playButton.smoothed = false;
    playButton.anchor.setTo(0.5, 0.5);
  },

  playTheGame: function() {
    this.game.state.start("Main");
  }
};
