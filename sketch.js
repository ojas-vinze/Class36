var  database;
var form,player,gameState=0,playerCount;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game1=new Game();
  game1.getState();
  game1.start();  
}

function draw(){

}