// remember maybe to amo bar
var heart, heartImg
var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombie_img
var health_bar, health_bar_image
var shooter, shooter1, shooter_shooting, shooter_3Imgx;
function preload(){
  zombieImg=loadImage("assets/zombie.png")
shooterImg=loadImage("assets/shooter_1.png")
//shooterImg=loadImage("assets/shooter_3.png")
shooter_shooting=loadImage("assets/shooter_3.png")

heart_1=loadImage("assets/heart_1.png")
heart_2=loadImage("assets/heart_2.png")
heart_3=loadImage("assets/heart_3.png")
bgImg=loadImage("assets/bg.jpeg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    bg.addImage(bgImg)
   bg.scale = 1.5
  


  shooter=createSprite(displayWidth-1150, displayHeight-450, 50, 50)
  shooter.addImage(shooterImg)
 shooter.scale=0.3

   // shooter_shooting=createSprite(displayWidth-1150, displayHeight-300, 50, 50)
   // shooter_shooting.addImage(shooter_3Img)

   
}

function draw() {
  background(0); 

if (keyDown("right")){
shooter.x=shooter.x+30

}

if (keyDown("left")){
  shooter.x=shooter.x-30
}

if (keyWentDown("space"))
{
shooter.addImage(shooter_shooting)

}


enemy()
drawSprites();

}



function enemy()
{
  if(frameCount%50===0){
  zombie = createSprite(random(200,2000),random(400,700),40,40)
 zombie.addImage(zombieImg)
zombie.visible=true
zombie.velocityX=-2  
  zombie.scale=0.1
}
}