class blueSquare2 extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, velocity){
        super(scene, x, y, 'bullet');
        //super(scene, centerX, centerY, 'bSquare', 'l0_sprite_square01');
        this.parentScene = scene;
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setVelocityY(-velocity);
        this.setImmovable();
        this.setCollideWorldBounds(true);
        this.setDepth(1);
        //this.setBounce(1,1);
    }

    update(){
        // if(keyUP.isDown){
        //     this.parentScene.addBullet(this.parent, this.velocity);
        // }
        
    }
}