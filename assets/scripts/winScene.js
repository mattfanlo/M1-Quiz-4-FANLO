class WinScene extends Phaser.Scene {
    constructor() {
      super('WinScene');
    }
  
    preload() {
      this.load.image('retryButton', '../assets/images/retryButton.png');
      this.load.image('mainMenuButton', '../assets/images/mainButton.png');
      this.load.image('winBackground', '../assets/images/BGwinScene.jpg');
      this.load.audio('sponge', '../assets/music/laughing.mp3');
    }
  
    create(data) {
      
      this.add.image(0, 0, 'winBackground').setOrigin(0, 0).setDisplaySize(1920, 1080);
      
      this.music = this.sound.add('sponge');
      this.music.play({ loop: false });
      
      this.add.text(600, 300, "🎉 YOU WON! 🎉", {
        font: "80px Arial",
        fill: "#00FF00"
      });
      
      this.add.text(600, 400, `Final Score: ${data.finalScore}`, {
        font: "60px Arial",
        fill: "#FFFFFF"
      });
      
      const retryButton = this.add.image(960, 700, 'retryButton')
        .setScale(0.5)
        .setInteractive();
  
      retryButton.on('pointerdown', () => {
        this.music.stop();
        this.scene.start('GameScene');
      });
  
      const mainMenuButton = this.add.image(960, 850, 'mainMenuButton')
        .setScale(0.5)
        .setInteractive();
  
      mainMenuButton.on('pointerdown', () => {
        this.music.stop();
        this.scene.start('MainMenu');
      });
    }
  }
  