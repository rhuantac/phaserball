import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  cursors: any;
  player: any;
  ball: any;
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.spritesheet('balls', 'assets/balls.png', { frameWidth: 17, frameHeight: 17 });
  }

  create() {
    this.player = this.add.circle(200, 200, 20, 0x6666ff);
    this.ball = this.physics.add.image(300, 300, 'balls',1);
    
    this.physics.add.existing(this.player, false);
    this.player.body.setCircle(20);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, this.ball);
    this.player.body.setCollideWorldBounds(true);
    this.player.setStrokeStyle(2, 0xefc53f);
    this.ball.body.setCircle(9)
    this.ball.body.setCollideWorldBounds(true);
    this.ball.body.setFrictionX(500);
    this.ball.body.setBounce(0.6)
  }

  update(time: number, delta: number): void {
    this.player.body.setVelocity(0);
    if(this.cursors.space.isDown){
      this.ball.body.setVelocityX(500);
    }
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-100);
    }
    else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(100);
    }

    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-100);
    }
    else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(100);
    }
  }
}
