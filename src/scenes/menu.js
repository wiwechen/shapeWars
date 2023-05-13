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

        this.grid = this.add.tileSprite(0, 0, 480, 720, 'grid').setOrigin(0, 0);
        menuConfig.backgroundColor = '#0d2cb8';
        menuConfig.fontSize = '40px'
        
        this.add.text(centerX,centerY-300, "Shape Wars", menuConfig).setOrigin(0.5);
        
        menuConfig.backgroundColor = '#DE3163';
        menuConfig.fontSize = '28px';

        
        this.add.text(centerX,centerY+120, "Click -> to start", menuConfig).setOrigin(0.5);
        this.add.text(centerX,centerY+180, "Click <- to see credits", menuConfig).setOrigin(0.5);

        menuConfig.fontSize = '20px';
        menuConfig.backgroundColor = '#820fa8';
        this.add.text(centerX,centerY-150, "Click <- and -> to move", menuConfig).setOrigin(0.5);
        this.add.text(centerX,centerY-100, "Click UP to fire bullet", menuConfig).setOrigin(0.5);
        this.add.text(centerX,centerY-50, "Can fire 10 times max", menuConfig).setOrigin(0.5);
        this.add.text(centerX,centerY, "How long can you survive", menuConfig).setOrigin(0.5);
        cursors = this.input.keyboard.createCursorKeys();

        
        
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(cursors.right)){
            this.sound.play('uiSound', { volume: 0.5 });
            this.scene.start('playScene');
        }
        if(Phaser.Input.Keyboard.JustDown(cursors.left)){
            this.sound.play('uiSound', { volume: 0.5 });
            this.scene.start('creditsScene')
        }

    }
}