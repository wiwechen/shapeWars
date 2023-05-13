//console.log("hello world");

/***********************************************************************************************************************************************
 * Name: William Chen
 * Title:Shape Wars
 * Time: 
 * 
 * 
 * 
 * Main Obejective:
 * 
 * Bare Minimum Submission Points(e.g, git repo, playable link, Comment Header ) (15)
 * 
 * Use multiple Scene classes (dictated by your game's style) (5) [PROGRESS: COMPLETE]
 * Properly transition between Scenes and allow the player to restart w/out having to reload the page (5) [PROGRESS:COMPLETE]
 * Include in-game instructions using text or other means (e.g., tooltips, tutorial, diagram, etc.) (5) [PROGRESS:COMPLETE]
 * Have some form of player input/control appropriate to your game design (5) [PROGRESS:Complete]
 * Include one or more animated characters that use a texture atlas (5) [PROGRESS: COMPLETE]
 * Simulate scrolling with a tileSprite (or equivalent means) (5)[PROGRESS:COMPLETE]
 * Implement proper collision detection (via Arcade Physics or a custom routine) (5)[PROGRESS:COMPLETE]
 * Have looping background music (5)[PROGRESS: COMPLETE]
 * Use a minimum of three sound effects for key mechanics, UI, and/or significant events appropriate to your game design (5)[PROGRESS: COMPLETE]
 * Use randomness to generate escalating challenge, e.g. terrain, pickups, etc. (5)[PROGRESS: COMPLETE]
 * Include some metric of accomplishment that a player can improve over time, e.g., score, survival time, etc. (5)[PROGRESS: COMPLETE]
 * Be theoretically endless (5) [PROGRESS:In Theory, Complete]
 * Be playable for at least 15 seconds for a new player of low to moderate skill (5)[PROGRESS:In Theory, Possible, so Complete]
 * Run without significant crashes or errors (5)[PROGRESS:COMPLETE]
 * Include in-game credits for all roles, assets, music, etc. (5) [PROGRESS: COMPLETE]
 * 
 * 
 * 
 * 
 * Creative Tilt: Does your game...
 * ...do something technically interesting? Are you particularly proud of a programming technique you implemented? 
 * Did you look beyond the class examples and learn how to do something new? (5)
 * Explanation:
 * I implemented a bullet mechanic for my game, and it required a lot of references to different sources talking about different things. I had to first learn
 * how to create the bullet class, then learn how to spawn it where the Square was at, and then have to learn how to destroy the object that the bullet collides as well
 * as itself. This took at least 6 hours alone to finally get it to work properly.
 * 
 * ...have a great visual style? Does it use music or art that you're particularly proud of? 
 * Are you trying something new or clever with the endless runner form? (5)
 * Explanation: 
 * By bullet mechanic is something I'm proud off in my endless runner. It doesn't add any score to the game, and your only have a limited amount of
 * bullets. But, it will destroy a red triangle if collided. This way, players have the option to stratagies how they should ration their
 * bullets. Do they choose to use it all now or do they save them for later on in an emergency. If they're in a tight spot, do they use their bullet
 * to get out, or do they take the risk and try to avoid the triangle so they can save their bullets. Instead of just being regular endless runner
 * of dodging triangles whose speed will increase after certain time, they have this stratagise element into the endless runner of picking how they
 * should use their limited amount of bullets during this game.
 * 
 * 
 * 
 * 
 * Sources:
 * fix collison box: https://youtu.be/7rcw_9Bqso0
 * spritesheet/json creation: https://www.leshylabs.com/apps/sstool/
 * Making bullets youtube vide tutorial: https://youtu.be/9wvlAzKseCo
 * bullet in phaser example: https://labs.phaser.io/view.html?src=src/pools/bullets.js&v=dev
 * the line above this one's source code: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/pools/bullets.js
 * bullet collison: https://youtu.be/hkedWHfU_oQ
 * music download: https://www.chosic.com/download-audio/42091/
 * UI Soundeffect: https://freesound.org/people/InspectorJ/sounds/403015/
 * break soundeffect: https://freesound.org/people/unfa/sounds/221528/
 * shoot soundeffect: https://freesound.org/people/MikeE63/sounds/466867/
 * increase level soundeffect: https://freesound.org/people/plasterbrain/sounds/464908/
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
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Load, Menu, Credits, Play, gameOver]
}
let game = new Phaser.Game(config);
//size variables
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
//key inputs
let cursors;
let keyLEFT, keyRIGHT, keyDOWN, keyUP, keySHIFT;
//array for respawn
let coordX = [centerX, centerX/3, centerX+(2*(centerX/3))];
const squareVelocity = 50;
console.log("centerX: "+centerX);
console.log("centerY: "+centerY);
//object
let square = null;
let bar = null;
//Score 
let timer;
let score;
let hsScore = 0;
let tileScrollSpeed;
