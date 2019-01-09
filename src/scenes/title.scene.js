export default class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: "TitleScene"
        });
    }

    create() {
        const playButton = this.add.sprite(this.centerX(), this.centerY(), 'play')
        .setInteractive()
        .setScale(4)
        .on('pointerdown', () => this.playTheGame());
    }

    centerX() {
        return this.sys.game.config.width / 2;
    }
    centerY() {
        return this.sys.game.config.height / 2;
    }

    playTheGame() {
        this.scene.start("GameScene");
    }
    
}