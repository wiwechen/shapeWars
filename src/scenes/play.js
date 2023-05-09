class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
//
    preload(){
      this.anims.create({
          key: 'beat',
          frameRate: 12,
          frames: this.anims.generateFrameNames("bSquare", {
              prefix: "l0_sprite_square0",
              //suffix: ".png",
              start: 1,
              end: 12,
              //first: 1,
              frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
          }),
          repeat: -1
      });
  }
  //
    create() {
      this.add.text(20, 20, "Shape Wars Play");
      cursors = this.input.keyboard.createCursorKeys();
      this.square = new blueSquare(this, centerX, centerY, 'bSquare', 'l0_sprite_square01');
      this.square.play("beat");
    }



    update(){
      if(Phaser.Input.Keyboard.JustDown(cursors.shift)){
        this.scene.start('menuScene');
    }
    }
  }