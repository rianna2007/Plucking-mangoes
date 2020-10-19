var boyImage=loadImage (boy.png);
var treeImage=loadImage (tree.png);

var mango1=200, 20;
var mango2=

boyImage(170, 20);
treeImage=(300, 30);


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function mouseDragged(){
  if (gameState=="onStone"){
  Matter.Body.setPosition(mango.body, {x: mouseX , y: mouseY});
  }
}

function keyPressed(){
  if(keyCode === 32){
      //stone.attach(bird.body);
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState="launched";
}




