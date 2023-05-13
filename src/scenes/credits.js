class Credits extends Phaser.Scene{
    constructor(){
        super("creditsScene");
    }

    create(){
        this.add.text(centerX, h/15, "Shape Wars Credits").setOrigin(0.5);
        this.add.text(centerX, h/15+50, "All art visuals were created by me, William Chen").setOrigin(0.5);
        this.add.text(centerX, h/15+65, "All coding was done by me, William Chen").setOrigin(0.5);
        this.add.text(centerX, h/15+135, "Music:").setOrigin(0.5);
        this.add.text(centerX, h/15+150, "Spazzmatica Polka by Kevin MacLeod (CC by 3.0)").setOrigin(0.5);
        this.add.text(centerX, h/15+205, "Sound Effects:").setOrigin(0.5);
        this.add.text(centerX, h/15+220, ' "UI Confirmation Alert, C2.wav" by InspectorJ').setOrigin(0.5);
        this.add.text(centerX, h/15+235, '(www.jshaw.co.uk) of Freesound.org').setOrigin(0.5);
        this.add.text(centerX, h/15+250, '(CC by 4.0)').setOrigin(0.5);
        this.add.text(centerX, h/15+280, ' "Glass Break" by unfa of Freesound.org (CC by 0)').setOrigin(0.5);
        this.add.text(centerX, h/15+310, ' "blaster shot single 5.wav"').setOrigin(0.5);
        this.add.text(centerX, h/15+325, ' by MikeE63 of Freesound.org (CC by 0)').setOrigin(0.5);
        this.add.text(centerX, h/15+355, '"8bit Powerup" by plasterbrain of Freesound.org').setOrigin(0.5);
        this.add.text(centerX, h/15+370, '(CC by 0)').setOrigin(0.5);


        

        
        
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