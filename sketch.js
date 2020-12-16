var bullet, wall
var speed, weight
var thickness






function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
 bullet= createSprite(40, 200, 50, 10);
 wall=createSprite(1200,200,thickness,height/2)
 bullet.velocityX=speed
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(collided(bullet,wall)){
    bullet.velocityX=0
    var D =0.5 * speed * weight * speed/(thickness*thickness*thickness)
    if(D>10){
wall.shapeColor= color(255,0,0)

    }
    
    if(D<10){
      wall.shapeColor=color(0,255,0)
    }

  }
}



function collided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x
if (bulletRightEdge>=wallLeftEdge){
return true



}
return false
}