class blueSquare extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y , texture, frame);

        scene.add.existing(this);
        this.moveSpeed = 2;
        //cursors = this.input.keyboard.createCursorKeys();

    }

    update(){
        if(keyLEFT.isDown && this.x >= 0 + this.width){
            
            this.x -= this.moveSpeed;
            
        }else if(keyRIGHT.isDown && this.x<=game.config.width-this.width){
            this.x += this.moveSpeed;


        }

        

    }


}