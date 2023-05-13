class Load extends Phaser.Scene{
    constructor(){
        super('loadscene');
    }

    preload(){
        
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        //

        this.load.path = './assets/';
        console.log('assets path has been set');

        //real square
        this.load.atlas('bSquare', 'blueSquare/blueSquareSheet.png', 'blueSquare/trueBlueSquare.json');
        this.load.atlas('bSquare2', 'blueSquare2/spritesheet.png', 'blueSquare2/blueSprite2.json');
        this.load.image('bullet', 'blueSquare2/l0_sprite_square12.png' )
        this.load.image('bar', 'purpleBar.png')

        //triangle
        this.load.image('rTriangle', 'redTriangle/redTriangleLFinal.PNG');
        this.load.image('rTriangle2', 'redTriangle/redTriangleM.PNG');
        this.load.image('rTriangle3', 'redTriangle/redTriangleS.PNG');

        //audio
        this.load.audio('bgm', ['audio/Spazzmatica-Polka.mp3']);
        this.load.audio('glassBreak', ['audio/221528__unfa__glass-break.mp3']);
        this.load.audio('uiSound', ['audio/403015__inspectorj__ui-confirmation-alert-c2.wav']);
        this.load.audio('fireAway', ['audio/466867__mikee63__blaster-shot-single-5.wav']);
        this.load.audio('levelUp', ['audio/464908__plasterbrain__8bit-powerup.flac']);

        //grid background
        this.load.image('grid', 'grid.jpg')
        

    }
    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }

        // go to Title scene
        this.scene.start('menuScene');
    }
}

