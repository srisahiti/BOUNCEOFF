function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=3;
  fixedRect.debug="true";
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.velocityY=-3;
  movingRect.debug="true";
}

function draw() {
  background(255,255,255); 
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    )
  {
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
  
  if(movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2
    )
  {
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
  }
  
  drawSprites();
}