var wall, thickness;
var bullet,speed, weight;
function setup() {
  createCanvas(1600,400);
  thickness= random(22,83);
  speed= random(223,321)
  weight= random(30,52)
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor= color(255)
  bullet.velocityX= speed;
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColour=color(80,80,80)
 // thickness= random(22,83);
}
function draw() {
  background(0);
  
  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage= 0.5 *width *speed *speed/ (thickness *thickness *thickness);

    if(damage>10) {
      wall.shapeColor= color(255,0,0)
    }
  
  if(damage<10) {
   wall.shapeColor= color(0,255,0); 
  }
   
}
   //hasCollided();
  drawSprites(); 
}

function hasCollided(bullet, wall) {
      bulletRightEdge= bullet.x+ bullet.width;
      wallLeftEdge= wall.x;
      if(bulletRightEdge>=wallLeftEdge) {
        return true;
      }
      return false;

      // if(hasCollided(bullet,wall)) {
      //   bullet.velocityX=0;
      //   damage= 0.5 *width *speed *speed/ (thickness *thickness *thickness);
    
      //   if(damage>10) {
      //     wall.shapeColor= color(255,0,0)
      //   }
      
      // if(damage<10) {
      //  wall.shapeColor= color(0,255,0); 
      // }
      
     // }
      

}