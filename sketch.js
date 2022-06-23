var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
console.log("aksharra")
if(keyIsDown(RIGHT_ARROW)){
  box.x+=10
}
if(keyDown("left")){
  box.x-=10
}
if(keyIsDown(UP_ARROW)){
  box.y-=10
}
if(keyDown("down")){
  box.position.y+=10
}
drawSprites()
}