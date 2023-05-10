class redTriangle2 extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity){
        super(scene, coordX[Math.floor(Math.random()*3)], centerY/2, 'rTriangle');
        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setVelocityY(velocity);
        this.setImmovable();
        this.newTriangle = true;

    }

    update(){

        if(this.newTriangle && this.y > centerY){
            console.log("the if is triggered");
            this.parentScene.addTriangle(this.parent, this.velocity);
            this.newTriangle = false;
        }

        if(this.y < this.height){
            this.destroy();
        }
        
    }
}