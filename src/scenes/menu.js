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

        this.add.text(540,360, "Shape Wars Menu", menuConfig).setOrigin(0.5);
    }
}