var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;
var car1;
var car2;
var car3
var car4;
var cars;
var database;
var carImg;
var carImg1;
var carImg2;
var carImg3;
var trackImg;

var form, player, game;
var distance = 0;

function setup(){
  canvas = createCanvas(displayWidth - 20 , displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function preload() {
  carImg = loadImage('/images/car1.png')
  carImg1 = loadImage('/images/car2.png')
  carImg2 = loadImage('/images/car3.png')
  carImg3 = loadImage('/images/car4.png')
  trackImg = loadImage('/images/track.jpg')
}


function draw() {
  if (playerCount === 4) {
    game.update(1)
    
  }
  if (gameState === 1) {
    clear()
    game.play()
  }

  if (gameState === 2) {
    game.end()
  }
}

