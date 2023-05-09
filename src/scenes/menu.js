class Menu extends Phaser.Scene {
    constructor () {
        super("menuScene");
    }


    create(){
        let menuConfig = {
            fontFamily: 'Copperplate',
            fontSize: '28px',
            backgroundColor: '#DE3163',
            color: '#ffff00',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
           }

        this.add.text(centerX,centerY, "Shape Wars Menu", menuConfig).setOrigin(0.5);
        this.add.text(centerX,centerY+80, "Click -> to start", menuConfig).setOrigin(0.5);
        cursors = this.input.keyboard.createCursorKeys();
        //keyLEFT = this.input.keyboard
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(cursors.right)){
            this.scene.start('playScene');
        }

    }
}