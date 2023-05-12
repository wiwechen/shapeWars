//console.log("hello world");

/***********************************************************************************************************************************************
 * Name:
 * Title:
 * Time:
 * 
 * 
 * 
 * Main Obejective:
 * 
 * Bare Minimum Submission Points(e.g, git repo, playable link, Comment Header ) (15)
 * 
 * Use multiple Scene classes (dictated by your game's style) (5) [PROGRESS:75%]
 * Properly transition between Scenes and allow the player to restart w/out having to reload the page (5) [PROGRESS:I]
 * Include in-game instructions using text or other means (e.g., tooltips, tutorial, diagram, etc.) (5) [PROGRESS:I]
 * Have some form of player input/control appropriate to your game design (5) [PROGRESS:80%]
 * Include one or more animated characters that use a texture atlas (5) [PROGRESS: COMPLETE]
 * Simulate scrolling with a tileSprite (or equivalent means) (5)[PROGRESS:I]
 * Implement proper collision detection (via Arcade Physics or a custom routine) (5)[PROGRESS:COMPLETE]
 * Have looping background music (5)[PROGRESS:I]
 * Use a minimum of three sound effects for key mechanics, UI, and/or significant events appropriate to your game design (5)[PROGRESS:I]
 * Use randomness to generate escalating challenge, e.g. terrain, pickups, etc. (5)[PROGRESS: COMPLETE]
 * Include some metric of accomplishment that a player can improve over time, e.g., score, survival time, etc. (5)[PROGRESS:I]
 * Be theoretically endless (5) [PROGRESS:In Theory, Complete]
 * Be playable for at least 15 seconds for a new player of low to moderate skill (5)[PROGRESS:I]
 * Run without significant crashes or errors (5)[PROGRESS:I]
 * Include in-game credits for all roles, assets, music, etc. (5) [PROGRESS:I]
 * 
 * Creative Tilt: Does your game...
 * ...do something technically interesting? Are you particularly proud of a programming technique you implemented? 
 * Did you look beyond the class examples and learn how to do something new? (5)
 * Explanation:
 * 
 * ...have a great visual style? Does it use music or art that you're particularly proud of? 
 * Are you trying something new or clever with the endless runner form? (5)
 * Explanation: 
 * 
 * 
 * Sources:
 * fix collison box: https://youtu.be/7rcw_9Bqso0
 * spritesheet/json creation: https://www.leshylabs.com/apps/sstool/
 * Making bullets youtube vide tutorial: https://youtu.be/9wvlAzKseCo
 * bullet in phaser example: https://labs.phaser.io/view.html?src=src/pools/bullets.js&v=dev
 * the line above this one's source code: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/pools/bullets.js
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/
let config = {
    type: Phaser.CANVAS,
    width: 480,
    height: 720,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Load, Menu, Credits, Play]
}
let game = new Phaser.Game(config);

let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;
let cursors;
let keyLEFT, keyRIGHT, keyDOWN, keyUP, keySHIFT;
let coordX = [centerX, centerX/3, centerX+(2*(centerX/3))];
const squareVelocity = 50;
console.log("centerX: "+centerX);
console.log("centerY: "+centerY);
let square = null;
