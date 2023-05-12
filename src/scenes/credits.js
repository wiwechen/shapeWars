class Credits extends Phaser.Scene{
    constructor(){
        super("creditsScene");
    }

    create(){
        this.add.text(centerX, h/10, "Shape Wars Credits").setOrigin(0.5);
        this.add.text(centerX, (h/10)+20, "Click <- to go back").setOrigin(0.5);
        cursors = this.input.keyboard.createCursorKeys();
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(cursors.left)){
            this.sound.play('uiSound', { volume: 0.5 });
            this.scene.start('menuScene');
        }
    }
}