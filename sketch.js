var wizard;
var wizardImg;
var sword, swordImg;

function preload()
{
   wizardImg=loadImage("wizard.png");
   swordImg=loadImage("sword.png");
}
function setup() {
  createCanvas(1000,800);
  wizard = createSprite(300, 600, 50, 50);
  wizard.addImage(wizardImg);
  wizard.scale=0.5;

  sword = createSprite(100, 400, 50, 50);
  sword.addImage(swordImg);
  sword.scale=0.5;
}

function draw() {
  background("blue");  

  wizard.y=mouseY;
  drawSprites();
}