
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var ground;

var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX =-4;
  ground.x = ground.width /2;
  console.log(ground.x)


  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
  background(255);
  
    
  stroke("orange");
  fill("white");
  textSize(15);
  text("Score : "+ score, 289,83);

  
  
  if(keyDown("space")){
    monkey.velocityY=-13;
  }
monkey.velocityY = monkey.velocityY + 0.8;
  
monkey.collide(ground)

if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();
  score = score+1;
}
  
if(monkey.isTouching(obstacleGroup)){ 
}


spawnBananas();
spawnObstacles();
  
  
  
stroke("purple");
fill("white");
textSize(20);
survivalTime=Math.ceil(frameCount/frameRate())
text("survival Time:"+ survivalTime ,100,50);
  
    
  if (ground.x < 0){
    ground.x = ground.width/2;
  }


drawSprites();

  


      
}

function spawnBananas(){
if(frameCount%80===0){
  banana = createSprite(382,179,40,10);
  banana.addImage(bananaImage);
  banana.X = Math.round(random(120,200));
  banana.scale=0.1;
  banana.velocityX=-5;
  bananaGroup.add( banana );
}
}


function spawnObstacles(){
if(frameCount%300===0){
  obstacle = createSprite(365,329,40,10);
  obstacle.addImage(obstacleImage);
  obstacle.X = Math.round(random(120,200));
  obstacle.scale=0.1;
  obstacle.velocityX=-5;
  obstacleGroup.add( obstacle );
}
}








