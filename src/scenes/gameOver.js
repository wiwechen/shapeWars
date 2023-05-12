class gameOver extends Phaser.Scene {
    constructor () {
        super("gameOverScene");
    }


    create(){
        let gameOverConfig = {
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

           this.add.text(centerX,centerY, "Game Over. You lasted: "+score+"s", gameOverConfig).setOrigin(0.5);
           this.add.text(centerX,centerY+80, "High Score is: " +hsScore+"s", gameOverConfig).setOrigin(0.5);
           this.add.text(centerX,centerY+140, "Click UP to retry", gameOverConfig).setOrigin(0.5);
           this.add.text(centerX,centerY+180, "Click DOWN for menu", gameOverConfig).setOrigin(0.5);
           cursors = this.input.keyboard.createCursorKeys();       
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(cursors.up)){
            this.sound.play('uiSound', { volume: 0.5 });
            this.scene.start('playScene');
        }

        if(Phaser.Input.Keyboard.JustDown(cursors.down)){
            this.sound.play('uiSound', { volume: 0.5 });
            this.scene.start('menuScene');
        }

        


    }
}