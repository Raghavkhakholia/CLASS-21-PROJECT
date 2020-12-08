var bullet , wall;
var speed , weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  //speed = random(55,90);
  //weight = random(400,1500);
  speed = random(30,52);
  weight = random(223,321);
  thickness = random(22,83);

  bullet = createSprite(100, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("lightblue");  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
     bullet.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22509;
     if(deformation > 180){
       bullet.shapeColor = color(255,0,0);
     }
     if(deformation < 180 && deformation > 100){
       bullet.shapeColor = color(230,230,0);
     }
     if(deformation < 100){
       bullet.shapeColor = color(0,255,0);
     }
  }
  drawSprites();
}