var PhaserPacman = PhaserPacman || {};

PhaserPacman.Boot = function() {

};

PhaserPacman.Boot.prototype = {
  init: function() {
    this.input.maxPointers = 1;
    //this.scale.pageAlignHorizontally = true;
    //this.scale.pageAlignVertically = true;
  },
  create: function() {
    this.state.start('PhaserPacman.Title');
  }
};