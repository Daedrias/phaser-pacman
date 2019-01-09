import 'phaser';
import TitleScene from "./scenes/title.scene.js";
import PreloaderScene from "./scenes/preloader.scene.js";
import GameScene from "./scenes/game.scene.js";

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',    
    pixelArt: true,
    width: 900,
    height: 1200,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [PreloaderScene, TitleScene, GameScene]
};

var game = new Phaser.Game(config);