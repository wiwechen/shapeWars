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

      this.triangleSpeed = 250
      
      this.square = new blueSquare(this, centerX, centerY*1.8, 'bSquare', 'l0_sprite_square01');

      this.square.setScale(4);
      this.square.play("beat"); 

      


      this.triangle01= new redTriangle(this, centerX, centerY/3, 'rTriangle');
      this.triangle02= new redTriangle(this, centerX/3, centerY/3, 'rTriangle');
      this.triangle03 = new redTriangle(this, centerX+(2*(centerX/3)), centerY/3, 'rTriangle');

      //Spawn Triangle randomly
      //create Triangle barrier group
      this.triangleGroup = this.add.group({
        runChildUpdate: true
      });

      //time before spawn set
      this.time.delayedCall(2500, ()=>{
        this.addTriangle();
      });



      //KeyConfigure
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    addTriangle(){
      let speedVariance =  50; 
      let triangle = new redTriangle2(this, this.triangleSpeed - speedVariance);
      this.triangleGroup.add(triangle);
    }



    update(){
      this.square.update();
      if(Phaser.Input.Keyboard.JustDown(cursors.shift)){
        this.scene.start('menuScene');
    }
      
    }
  }