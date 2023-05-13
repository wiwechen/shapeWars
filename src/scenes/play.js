class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }
//
  preload(){
    this.anims.create({
        key: 'beat',
        frameRate: 12,
        frames: this.anims.generateFrameNames("bSquare2", {
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
    
    cursors = this.input.keyboard.createCursorKeys();

    //background
    this.grid = this.add.tileSprite(0, 0, 480, 720, 'grid').setOrigin(0, 0);

    this.triangleSpeed = 350;
    this.triangleMaxSpeed = 500;

    tileScrollSpeed = 4;


    this.bulletSpeed = 200;

    this.bulletAmmount = 10;

    this.add.rectangle(0, borderUISize - borderPadding - 80, w, borderUISize*2, 0x9c0d03).setOrigin(0,0);

    this.bulletUI = this.add.text(20, 20, "Bullets: " + this.bulletAmmount);


    //Creating blue Square
    square = this.physics.add.sprite(centerX, centerY*1.8, 'bSquare2', 'l0_sprite_square01').setOrigin(0.5);
    console.log("CenterY*1.8 = " + centerY*1.8 + ", CenterY*2.0 = "+ centerY*1.5);
    square.play("beat");
    square.setScale(3.5);
    square.setCollideWorldBounds(true);
    square.setImmovable();
    square.setMaxVelocity(600, 0);
    square.setDragX(50);
    square.setDepth(1);
    square.destroyed = false;

    //create bar
    bar = this.physics.add.sprite(centerX, h+80, 'bar').setOrigin(0.5);
    bar.setImmovable();
    bar.setDepth(1);

    //bullet code
    this.bulletGroup = new bulletGroup(this);
    this.lastFired = 0;

    //triangle codes
    this.triangle01= new redTriangle(this, centerX, centerY/3, 'rTriangle');
    this.triangle02= new redTriangle(this, centerX/3, centerY/3, 'rTriangle');
    this.triangle03 = new redTriangle(this, centerX+(2*(centerX/3)), centerY/3, 'rTriangle');

    //Spawn Triangle randomly
    //create Triangle barrier group
    this.triangleGroup = this.add.group({
      runChildUpdate: true
    });

    //spawn first triangle
    this.addTriangle();

    //play bgm
    this.bgm = this.sound.add('bgm',{
      mute: false,
      volume: 0.4,
      rate: 1,
      loop: true
    });
    this.bgm.play();
    
    //time and score var sets
    timer = 0;
    score = 0;
    this.timerStuff = this.time.addEvent({
      delay: 1000,
      callback: this.timeScore,
      callbackScope: this,
      loop: true
    });
    this.timeUI = this.add.text(380, 20, "Score: "+timer);


    //KeyConfigure
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    
  }

  addTriangle(){
    let speedVariance =  Phaser.Math.Between(40, 50);; 
    let triangle = new redTriangle2(this, this.triangleSpeed - speedVariance);
    this.triangleGroup.add(triangle);
  }


  shootBullet(){
    this.bulletGroup.fireBullet(square.x, square.y-20);
  }



  update(time, delta){
    this.grid.tilePositionY -= tileScrollSpeed;



    if(!square.destroyed){
      if(keyLEFT.isDown){
        square.body.velocity.x -= squareVelocity;
      }else if(keyRIGHT.isDown){
        square.body.velocity.x += squareVelocity;
      }else if(keyUP.isDown && time > this.lastFired){
        this.sound.play('fireAway', { volume: 0.5 });
        this.shootBullet();
        this.lastFired = time + 500;
        if(this.bulletAmmount > 0){
          this.bulletAmmount -= 1;
          this.bulletUI.text = "Bullets: " + this.bulletAmmount;

        }
        
        
      }

      this.physics.world.collide(this.triangleGroup, square, this.squareCollison, null, this);
      this.physics.world.collide(this.triangleGroup, bar, this.barCrash, null, this);
      if(this.physics.world.collide(this.bulletGroup, this.triangleGroup, this.crash, null, this)){
        if(this.triangleGroup.getLength()==0){
          console.log(this.triangleGroup.getLength());
          this.addTriangle();
        }     
      }
      if(this.triangleGroup.getLength()==0){    //in the case there happens to be nothing in the group, a new triangle will be added to the group.
        this.addTriangle();
      }

      this.timeUI.text = "Score: "+timer;


      


    }

    
  }

  squareCollison(triangleGroup){
    this.sound.play('glassBreak', { volume: 0.5 });
    this.bgm.stop();
    square.destroyed = true;
    triangleGroup.destroy();
    square.destroy();
    score = timer;
    if(score>hsScore){
      hsScore=score;
    }
    this.time.delayedCall(1000, () => { 
    this.scene.start('gameOverScene');
    });
    
    
  }

  crash(triangleGroup,bulletGroup){
    this.sound.play('glassBreak', { volume: 0.5 });
    triangleGroup.destroy();
    bulletGroup.destroy();
  }

  barCrash(triangleGroup){
    triangleGroup.destroy();
  }

  timeScore(){
    timer++;
    if(timer%5 == 0){
      if(this.triangleSpeed <= this.triangleMaxSpeed){
        this.sound.play('levelUp', { volume: 0.5 });
        this.triangleSpeed += 30;
        tileScrollSpeed += 0.5;
      }
    }
  }


}