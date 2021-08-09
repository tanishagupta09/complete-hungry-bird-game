//create all global variables here
var bg,bgImg;
var dog,dogImg;
var feed,feedImg;
var bone, boneImg;
var eat,eatImg;
var boneGrp;
var dogBarking;
var happyDog;
var click;




function preload(){
  bgImg = loadImage("background.jpg");

  dogImg = loadAnimation("dog.png");

  feedImg = loadImage("food.png");

  boneImg = loadImage("dogbone.png");
  
  eatImg = loadImage("eat.png");
  
  happyDog = loadAnimation("happydog.png");
  
  dogBarking = loadSound("dogbarking.wav");
  
  click = loadSound("click.wav");
  
  
  }

function setup() {
 createCanvas(600,400);
  
  bg = createSprite(300,200,600,600);
  bg.addImage(bgImg);
  bg.scale = 1.2;
  
  dog = createSprite(500,300,20,40);
  dog.addAnimation("dog",dogImg);
  dog.addAnimation("happyDog",happyDog);
  dog.scale = 1.5;
  
  feed = createSprite(250,100,50,50);
  feed.addImage(feedImg);
  feed.scale = 0.4;
  
  eat = createSprite(400,100,50,50);
  eat.addImage(eatImg);
  eat.scale = 0.7;
  
  boneGrp = new Group();
 
  
  
}

function draw() {
 
   background(255);
 
    if(mousePressedOver(feed)){
      eatBone();
      click.play();
    }
  
 
  
  
  
  
  
  
  
  
    drawSprites();
  
  if(mousePressedOver(eat)){
    textSize(25);
    text("Bone Eaten" , 420,40);
    boneGrp[0].destroy();
    dogBarking.play();
    dog.changeAnimation("happyDog",happyDog);
    dog.scale = 0.4;
  }
  
}
 
  

function eatBone(){
  bone = createSprite(random(200,350),random(200,350),40,10);
  bone.addImage(boneImg);
  bone.scale = 0.2;
  boneGrp.add(bone);
  
  
  
  
}
