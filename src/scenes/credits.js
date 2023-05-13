class Credits extends Phaser.Scene{
    constructor(){
        super("creditsScene");
    }

    create(){
        this.add.text(centerX, h/15, "Shape Wars Credits").setOrigin(0.5);
        this.add.text(centerX, h/15+50, "All art visuals were created by me, William Chen").setOrigin(0.5);
        this.add.text(centerX, h/15+65, "All coding was done by me, William Chen").setOrigin(0.5);
        this.add.text(centerX, h/15+90+45, "Music:").setOrigin(0.5);
        this.add.text(centerX, h/15+105+45, "Spazzmatica Polka by Kevin MacLeod (CC by 3.0)").setOrigin(0.5);
        this.add.text(centerX, h/15+150+55, "Sound Effects:").setOrigin(0.5);
        this.add.text(centerX, h/15+180+40, ' "UI Confirmation Alert, C2.wav" by InspectorJ').setOrigin(0.5);
        this.add.text(centerX, h/15+195+40, '(www.jshaw.co.uk) of Freesound.org').setOrigin(0.5);
        this.add.text(centerX, h/15+210+40, '(CC by 4.0)').setOrigin(0.5);
        this.add.text(centerX, h/15+240+40, ' "Glass Break" by unfa of Freesound.org (CC by 0)').setOrigin(0.5);
        this.add.text(centerX, h/15+270+40, ' "blaster shot single 5.wav"').setOrigin(0.5);
        this.add.text(centerX, h/15+285+40, ' by MikeE63 of Freesound.org (CC by 0)').setOrigin(0.5);
        this.add.text(centerX, h/15+315+40, '"8bit Powerup" by plasterbrain of Freesound.org').setOrigin(0.5);
        this.add.text(centerX, h/15+315+55, '(CC by 0)').setOrigin(0.5);


        

        
        
        this.add.text(centerX, (h)-(60), "Click <- to go back").setOrigin(0.5);
        
        cursors = this.input.keyboard.createCursorKeys();
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(cursors.left)){
            this.sound.play('uiSound', { volume: 0.5 });
            this.scene.start('menuScene');
        }
    }
}