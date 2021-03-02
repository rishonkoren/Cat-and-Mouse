
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg = loadImage("images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,600);
cat.addImage(catImg);
cat.scale = 0.2;
mouse = createSprite(200,600);
mouse.addImage(mouseImg);
mouse.scale = 0.2;
cat.velocityX = -2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width-mouse.width)/2){
cat.velocityX = 0;
cat.changeAnimation("cathappy",catImg4);

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
