

var ghost, runner
var form, player, game
var backgroundimg
var ghostimg,playerimg;
var gameImg

var gameState = 0;

var playerCount = 0;




function preload(){

backgroundimg = loadImage("images/backgroundimg.png");
ghostimg = loadImage("images/Ghost.png")
playerimg = loadImage("images/player.png")
gameImg = loadImage("images/grassImage.jpg")


}



function setup() {

  
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   form = new Form();
}

function draw() {
  //background(255,255,255);  
  //if(gameState === 0){
    background(backgroundimg);
   form.display();
   //gameState = 1

 // }
  if(playerCount === 1){
    game.update(1);
  
  }
  //if(gameState === 1){
    //form.hide();
    //game.play();
    //gameState = 2
 // }
  if(gameState === 2){
    //game.end();
    background(gameImg)
    form.hide()
  }
  drawSprites();
}