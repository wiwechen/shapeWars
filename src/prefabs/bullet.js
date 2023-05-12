class bullet extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'bullet');
    }

    fire(x,y){
        this.body.reset(x,y);
        this.setActive(true);
        this.setVisible(true);
        this.setVelocityY(-900);
    }
}






class bulletGroup extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world, scene);

        this.createMultiple({
            classType: bullet,
            frameQuantity: 5,
            active: false,
            visible: false,
            key: 'bullet'
        });

    }
    fireBullet(x,y){
        const bullet = this.getFirstDead(false);
        if(bullet){
            bullet.fire(x,y);
        }


    }
}