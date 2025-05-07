class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.image('mainMenu', '../assets/images/mainMenu.png');
        this.load.image('playButton', '../assets/images/playButton.png');
        this.load.image('settingsButton', '../assets/images/settingsButton.png');
        this.load.image('creditsButton', '../assets/images/creditsButton.png');
        this.load.image('exitButton', '../assets/images/exitButton.png');
    }

    create() {
        this.add.image(960, 540, 'mainMenu');
    
        const play = this.add.image(960, 600, 'playButton')
            .setScale(0.5)
            .setInteractive();
        play.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    
        const settings = this.add.image(615, 700, 'settingsButton')
            .setScale(0.57)
            .setInteractive();
        settings.on('pointerdown', () => {
            alert("Coming Soon");
            console.log("Settings Clicked");
        });
    
        const credits = this.add.image(1300, 700, 'creditsButton')
            .setScale(0.5)
            .setInteractive();
        credits.on('pointerdown', () => {
            this.scene.start('CreditsScene');
        });
    
        const exit = this.add.image(1600, 220, 'exitButton')
            .setScale(0.3)
            .setInteractive();
        exit.on('pointerdown', () => {
            console.log("Exit Clicked");
            window.close();
        });
    }
}
