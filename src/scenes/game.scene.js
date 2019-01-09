import Pacman from '../objects/pacman.js'

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "GameScene"
        });
        this.PACMAN_VEL = 300;
    }

    preload() {
        this.load.path = 'assets/';
        this.load.tilemapTiledJSON('maze', 'tilemaps/maze.json');

        this.load.image('maze_tileset', 'maze_tileset_32x32.png');
        this.load.image('gum', 'gum.png');
        this.load.image('supergum', 'supergum.png');
        this.load.image('pacman', 'pacman.png');
    }

    create() {
        this.map = this.make.tilemap({ key: 'maze' });
        const maze_tileset = this.map.addTilesetImage('maze_tileset', 'maze_tileset');

        this.backgroundLayer = this.map.createStaticLayer('background', maze_tileset);


        this.wallsLayer = this.map.createStaticLayer('walls', maze_tileset);
        this.wallsLayer.setCollisionBetween(0, 100);

        // set the boundaries of our game world
        this.physics.world.bounds.width = this.backgroundLayer.width;
        this.physics.world.bounds.height = this.backgroundLayer.height;
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);


        this.createGumSprites();

        this.pacman = new Pacman(this, this.map.widthInPixels / 2, 848);

        // nope, you can't pass thru walls
        this.physics.world.addCollider(this.pacman, this.wallsLayer);

        // collect gums while passing on it
        this.physics.add.overlap(this.pacman, this.gums, this.collectGum, null, this);
        // collect gums while passing on it
        this.physics.add.overlap(this.pacman, this.supergums, this.collectSuperGum, null, this);



        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
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
    }

    createGumSprites() {
        this.gums = this.physics.add.group();
        this.supergums = this.physics.add.group();

        this.gums.enableBody = true;
        this.supergums.enableBody = true;

        // create sprite for all the gums in the corresponding object layer. for me api doc is misleading.
        // the first 'gums' is the object layer name in tiled
        // the second parameter is the name attribute of the object in tiled
        // the third one is the sprite that will be used
        this.gums.addMultiple(this.map.createFromObjects('gums', 'gum', { key: 'gum' }));
        this.supergums.addMultiple(this.map.createFromObjects('supergums', 'supergum', { key: 'supergum' }));
    }

    collectGum(pacman, gum) {
        gum.destroy();
        this.checkRemainingGums();
    }

    collectSuperGum(pacman, supergum) {
        supergum.destroy();
        this.checkRemainingGums();
    }
    checkRemainingGums() {
        if (this.gums.total === 0 && this.supergums.total === 0) {
            this.gameOver();
        }
    }
    gameOver() {
        console.log('Game Over!');
    }
}