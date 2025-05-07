class GameScene extends Phaser.Scene {
    constructor() {
      super('GameScene');
    }
  
    preload() {
      this.load.image("player", "../assets/images/spongebob.png");
      this.load.image("goal", "../assets/images/red.png");
      this.load.image("background", "../assets/images/house.jpeg");
      this.load.audio('bgm', "../assets/music/spongebob_music.m4a");
    }
  
    create() {
      this.add.image(0, 0, "background").setOrigin(0, 0);
  
      this.player = this.physics.add.sprite(391, 750, "player");
      this.player.setBounce(0);
      this.player.setCollideWorldBounds(true);
  
      this.goal = this.physics.add.sprite(1600, 750, "goal");
  
      this.score = 0;
      let style = { font: "50px Arial", fill: "#FFFB03" };
      this.textScore = this.add.text(50, 50, "Score: " + this.score.toString(), style);
  
      this.cursors = this.input.keyboard.createCursorKeys();
  
      this.music = this.sound.add('bgm');
      this.music.play({ loop: true });
    }
  
    update() {
      if (this.cursors.left.isDown) {
        this.player.x -= 3;
        this.player.flipX = false;
      }
      if (this.cursors.right.isDown) {
        this.player.x += 3;
        this.player.flipX = true;
      }
  
      this.physics.add.overlap(this.player, this.goal, this.WinGame, null, this);
    }
  
    WinGame() {
        this.score += 100;
        this.textScore.setText("Score: " + this.score);
        this.goal.disableBody(true, true);
      
        if (this.music) {
          this.music.stop();
        }
      
        this.time.delayedCall(1500, () => {
          this.scene.start('WinScene', { finalScore: this.score });
      });
    }
  }
