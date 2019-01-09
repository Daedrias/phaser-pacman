export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super({
            key: "PreloaderScene"
        });
    }

    preload() {
        // will be added before each relative path
        this.load.path = 'assets/';
        this.load.image('play', 'play.png'); // so assets/play.png

        this.load.tilemapTiledJSON('maze', 'tilemaps/maze.json');
        this.load.image('maze_tileset_32x32', 'maze_tileset_32x32.png');
    }

    update() {
        this.scene.start("TitleScene");
    }
}