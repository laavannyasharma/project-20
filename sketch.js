var bg;
var tom1;
var tom2;
var tom3;
var jerry1;
var jerry2;
var jerry3;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tom1=loadAnimation("images/cat1.png");
    tom2=loadAnimation("images/cat2.png","images/cat3.png");
    tom3=loadAnimation("images/cat4.png");
    jerry1=loadAnimation("images/mouse1.png");
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("tom",tom1);
tom.scale = 0.2;
jerry=createSprite(200,600);
jerry.addAnimation("jerry",jerry1);
jerry.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tom",tom3);
    tom.scale=0.2;
    tom.x=300;
    jerry.velocityX=0;
    jerry.addAnimation("jerry",jerry3);
    jerry.scale=0.15;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tom",tom2);
    jerry.addAnimation("jerry",jerry2);
}

}
