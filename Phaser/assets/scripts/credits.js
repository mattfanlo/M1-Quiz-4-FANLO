class CreditsScene extends Phaser.Scene {
    constructor() {
        super('CreditsScene');
    }

    preload() {
        this.load.image('mainButton', '../assets/images/mainButton.png');
        this.load.image('creditsBG', '../assets/images/BGwinScene.jpg');
    }

    create() {
        
        this.add.image(0, 0, 'creditsBG').setOrigin(0, 0).setDisplaySize(1920, 1080);

        
        const textStyle = {
            font: 'bold 42px Arial Black',
            fill: '#FFD700',                
            stroke: '#000000',              
            strokeThickness: 6,
            shadow: {
                offsetX: 4,
                offsetY: 4,
                color: '#333333',
                blur: 4,
                fill: true
            }
        };

        
        this.add.text(580, 300, 'FULL NAME: Matthew Miguel A. Fanlo', textStyle);
        this.add.text(580, 360, 'SECTION: A224', textStyle);
        this.add.text(580, 420, 'PROGRAM: EMC', textStyle);

        
        const backButton = this.add.image(960, 600, 'mainButton')
            .setScale(0.5)
            .setInteractive();

        backButton.on('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}
