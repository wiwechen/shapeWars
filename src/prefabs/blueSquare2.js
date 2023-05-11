class blueSquare2 extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity){
        super(scene, centerX, centerY*1.8, 'bSquare', 'l0_sprite_square01');
        //super(scene, centerX, centerY, 'bSquare', 'l0_sprite_square01');
        this.parentScene = scene;
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setMaxVelocity(0,velocity);
        this.setImmovable();
        this.setCollideWorldBounds(true);
        this.setDepth(1);
        this.setBounce(1,1);
        this.destroyed = false;
    }

    update(){
        if(keyLEFT.isDown){
            console.log("if triggered in bs2")
            this.x -= 6;
        }else if(keyRIGHT.isDown){
            this.x += 6;
        }
    }
}