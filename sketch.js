var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 150, 50, 50);
  wall = createSprite(1200,200,40,height/2);
  wall.shapeColor = color(80,80,80);
  
  speed = random(223,321);
  weight = random(30,50);
  thickness = random(22,83);
}

function draw() {
  background("orange"); 
  bullet.velocityX = speed;

  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor = Color(0,255,0);
    }
  }
  
  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}