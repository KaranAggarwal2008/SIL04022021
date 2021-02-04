var canvas;

var gameState=0;
var PaddleBasedWall,PaddleBasedWallButton1,PaddleBasedWallButton2;
var backgroundIMG;
var WaterCircleDoor,FireCircleDoor;
var greenGoose;
var waterCircle,FireCircle;
var FireImg;
var WaterImg;
var levelCounter =0;
var TimeUsed;
var water;
var water1;
var water2;
var waterGroup
var fire;
var ground,ground1,ground2,ground3,ground4;
var GGroup;
var invisibleGround;
var goose
var fireGroup;
var doorGroup;
var balancerVanisher;
function preload(){

backgroundIMG = loadImage("background.jpg");
FireImg=loadImage("FireCircle Image1.png");
WaterImg=loadImage("WaterCircle Image1.png");
}
function setup(){
    canvas = createCanvas(1200,800);

    waterGroup = new Group()
    //GGroup = new Group()
    fireGroup = new Group()
balancerVanisher = new Group()
doorGroup = new Group()

  //create player charaters
  waterCircle=createSprite(1100,770,20,20);
  FireCircle=createSprite(1160,770,20,20);
  FireCircle.setCollider("rectangle",0,0,20,20)
  waterCircle.setCollider("rectangle",0,0,20,20)

  //add images to player characters and scale them
  FireCircle.addImage(FireImg)
  FireCircle.scale=0.15;
 waterCircle.addImage(WaterImg)
 waterCircle.scale=0.15;
  
 //create fire
  fire=new Fire(1000,770,100,10,"red")

//create water
 water2 = new Water(500,770,100,10,"blue");
 water = new Water(500,370,150,10,"blue")
 water1 = new Water(675,170,350,10,"blue")
//waterGroup.add(water2)
 //create a help to reach the second floor
  drawBalancersAndAdaptiviters(200,770,20,10,"orange");
  drawBalancersAndAdaptiviters(50,770,100,10,"orange");
  drawBalancersAndAdaptiviters(250,570,20,10,"orange");

  //create goose
 goose=  createSprite(500,570,100,10)
goose.shapeColor="green";
  //create a help to reach the third floor
  drawBalancersAndAdaptiviters(800,550,50,50,"grey")

  //create fire
  var fire1 = new Fire(800,370,150,10,"red")


//waterGroup.add(water)

 //create a help to reach the forth/last floor of level 1
  drawBalancersAndAdaptiviters(50,345,100,120,"brown")

  //create fire
  var fire2 = new Fire(300,170,150,10,"red")

  //create water
//waterGroup.add(water1)

 //create help for firecircle to cross the last water with x position 675,y position of 170, width of 350 and height of 10
  drawBalancersAndAdaptiviters(800,160,99,10,"red")

  //create goals
  drawGoals(1000,130,88,100,"red")
  drawGoals(1100,130,88,100,"blue")

  //create floors
 ground = createSprite(600,790,1200,30)
 ground.shapeColor="brown"
 //GGroup.add(ground)
  ground1 = createSprite(700,590,-1000,30,"brown")
  ground1.shapeColor="brown"
  ground2=createSprite(600,390,1000,30)
  ground2.shapeColor="brown"
  ground3=createSprite(700,190,-1000,30)
  ground3.shapeColor="brown"
  ground4=createSprite(700,0,1400,10)
  ground4.shapeColor="brown"
//invisibleGround = createSprite(600,800,1200,20)
//invisibleGround.visible=false;
}
//end function setup

//start function draw
function draw(){
  //FireCircle.debug=true;
  //ground.debug=true;
 // ground1.debug=true;
 // waterCircle.debug=true;
 // console.log(FireCircle.y)
  //stop repition
  background(backgroundIMG);

  //create TimeUsed for feedback
  TimeUsed=Math.round(getFrameRate())
 // console.log(TimeUsed)
  textSize(30)
  textStyle(BOLD)
  text("Time Used: "+TimeUsed,30,30)
  //add Controls for FireCircle
  if(keyDown(LEFT_ARROW)&&gameState===0){
    FireCircle.x=FireCircle.x-5
  }
  if(keyDown(RIGHT_ARROW)&&gameState===0){
    FireCircle.x=FireCircle.x+5
  }
//if(keyCode==38){
 // console.log("UP_ARROW")
//FireCircle.velocityY=-4
//}
FireCircle.velocityY=+0.5
FireCircle.collide(ground)
FireCircle.collide(ground1)
FireCircle.collide(ground2)
FireCircle.collide(ground3)
FireCircle.collide(ground4)
FireCircle.collide(balancerVanisher)
//&&gameState===0&&FireCircle.isTouching(ground)||keyDown(UP_ARROW)&&gameState===0&&FireCircle.isTouching(ground1)||keyDown(UP_ARROW)&&gameState===0&&FireCircle.isTouching(ground2)||keyDown(UP_ARROW)&&gameState===0&&FireCircle.isTouching(ground3)||keyDown(UP_ARROW)&&gameState===0&&FireCircle.isTouching(ground4)||keyDown(UP_ARROW)&&gameState===0&&FireCircle.isTouching(balancerVanisher)
if(keyDown(UP_ARROW)&&gameState===0){
  FireCircle.velocityY=-16;
}
if(keyDown(UP_ARROW)&&gameState===0){
  FireCircle.velocityY=-16
}
if(keyDown(UP_ARROW)&&gameState===0){
  FireCircle.velocityY=-16
}
if(keyDown(UP_ARROW)&&gameState===0){
  FireCircle.velocityY=-16
}
//if(keyDown(UP_ARROW)&&gameState===0&&FireCircle.y===ground.y<+3&&FireCircle.y===ground.y>-3){
 // FireCircle.velocityY=-16
//}
  //Add controls for WaterCirclet
 if(keyDown("A")&&gameState===0||keyDown("a")&&gameState===0){
   waterCircle.x=waterCircle.x-5;
 }
 if(keyDown("d")&&gameState===0||keyDown("D")&&gameState===0){
   waterCircle.x=waterCircle.x+5;
 }
   waterCircle.velocityY=+0.5
   waterCircle.collide(ground)
   waterCircle.collide(ground1)
   waterCircle.collide(ground2)
   waterCircle.collide(ground3)
   waterCircle.collide(ground4)
   FireCircle.collide(balancerVanisher)
  // &&gameState===0&&waterCircle.isTouching(ground)||keyDown("w")&&gameState===0&&waterCircle.isTouching(ground1)||keyDown("w")&&gameState===0&&waterCircle.isTouching(ground2)||keyDown("w")&&gameState===0&&waterCircle.isTouching(ground3)||keyDown("w")&&gameState===0&&waterCircle.isTouching(ground4)||keyDown("w")&&gameState===0&&waterCircle.isTouching(balancerVanisher)||keyDown("W")&&gameState===0&&waterCircle.isTouching(ground)||keyDown("W")&&gameState===0&&waterCircle.isTouching(ground1)||keyDown("w")&&gameState===0&&waterCircle.isTouching(ground2)||keyDown("W")&&gameState===0&&waterCircle.isTouching(ground3)||keyDown("w")&&gameState===0&&waterCircle.isTouching(ground4)||keyDown("W")&&gameState===0&&waterCircle.isTouching(balancerVanisher)
   if(keyDown("w")){
    waterCircle.velocityY=-16;
  }
  if(FireCircle.isTouching(doorGroup)&&waterCircle.isTouching(doorGroup)){
    gameState=2
    doorGroup.destroyEach()
   // FireCircleDoor.shapeColor="black"
   // WaterCircleDoor.shapeColor="black"
  }
 //debug the below commented section
 //try to end the game if firecircle is touching the water
 if(FireCircle.isTouching(waterGroup)){
 FireCircle.destroy();
 waterCircle.destroy();
 ground1.destroy();
 ground.destroy();
 ground2.destroy()
 ground3.destroy()
 ground4.destroy()
 waterGroup.destroyEach()
 fireGroup.destroyEach()
 balancerVanisher.destroyEach()
 doorGroup.destroyEach()
 //fire.destroy()
// goose.destroy()
 goose.destroy()
 gameState=1;
// PaddleBasedWall.destroy()
 //PaddleBasedWallButton1.destroy()
 //PaddleBasedWallButton2.destroy()
 background("white")
 }
 if(waterCircle.isTouching(fireGroup)){
  FireCircle.destroy();
  waterCircle.destroy();
  ground1.destroy();
  ground.destroy();
  ground2.destroy()
  ground3.destroy()
  ground4.destroy()
  waterGroup.destroyEach()
  fireGroup.destroyEach()
  balancerVanisher.destroyEach()
  doorGroup.destroyEach()
  //fire.destroy()
 // goose.destroy()
  goose.destroy()
  gameState=1;
 // PaddleBasedWall.destroy()
  //PaddleBasedWallButton1.destroy()
  //PaddleBasedWallButton2.destroy()
  background("white")
  }
  if(waterCircle.isTouching(goose)||FireCircle.isTouching(goose)){
    FireCircle.destroy();
    waterCircle.destroy();
    ground1.destroy();
    ground.destroy();
    ground2.destroy()
    ground3.destroy()
    ground4.destroy()
    waterGroup.destroyEach()
    fireGroup.destroyEach()
    balancerVanisher.destroyEach()
    doorGroup.destroyEach()
    //fire.destroy()
   // goose.destroy()
    goose.destroy()
    gameState=1;
   // PaddleBasedWall.destroy()
    //PaddleBasedWallButton1.destroy()
    //PaddleBasedWallButton2.destroy()
    background("white")
    }
    drawSprites()
if(gameState===1){
  //background("white")
  text("You lose",400,400) 
  text("Time USED:"+TimeUsed+"to play again press ctrl+r",400,400)
  FireCircle.destroy();
  waterCircle.destroy();
  ground1.destroy();
  ground.destroy();
  ground2.destroy()
  ground3.destroy()
  ground4.destroy()
  waterGroup.destroyEach()
  fireGroup.destroyEach()
  balancerVanisher.destroyEach()
  //fire.destroy()
 // goose.destroy()
  goose.destroy()
  gameState=1;
 // PaddleBasedWall.destroy()
  //PaddleBasedWallButton1.destroy()
  //PaddleBasedWallButton2.destroy()
  //background("white")
}
//end function draw

//start function drawBalancersAndAdaptiviters
//accept argument x,y,width,height,shapeColor
function drawBalancersAndAdaptiviters(x,y,width,height,shapeColor){
  //add code to create sprite
  this.Balancers=createSprite(x,y,width,height);

  //add code to add shape color to sprite
  this.Balancers.shapeColor=shapeColor;
  balancerVanisher.add(this.Balancers)
  }
  //end funtion drawBalancersAndAdaptiviters

  //start function drawDiamonds
  //accept argument x,y,width,height,shapeColor
  // function drawDiamonds(x,y,width,height,shapeColor){
  //     //add code to create sprite
  //   this.diamonds=createSprite(x,y,width,height);

  //     //add code to add shape color to sprite
  //   this.diamonds.shapeColor=shapeColor;
  //   }
    //end function drawDiamonds

    //start function drawGoals
      //accept argument x,y,width,height,shapeColor
    // function drawGoals(x,y,width,height,shapeColor){
    //         //add code to create sprite
    //   this.goal=createSprite(x,y,width,height);

    //        //add code to add shape color to sprite
    //   this.goal.shapeColor=shapeColor;
    //   //balancerVanisher.add(this.goal)
    //   doorGroup.add(this.goal)
    //   }
      //end function drawGoals
    //  function keyPressed(){
     //   if(keyCode==38){
       //   FireCircle.velocityY=-16
       // }
   //   }
    if(gameState===2){
  //background("white")
  //console.log(gameState)
  text("Congratulations You won Your Time Used is: "+TimeUsed,400,400)
  if(TimeUsed<=60){
 text("congratulations You achieved the golden diamond",300,300)
 text("Congratulations You achieved the silver diamond",200,200)
 text("Congratulations You achieved the bronze diamond",100,100)
   }
   else if(TimeUsed<=120&&TimeUsed>=60){
     text("Congratulations You achieved the silver diamond",300,300)
     text("Congratulations You achieved the bronze diamond",200,200)
   } else if(TimeUsed>=120){
     text("Congratulations You achieved the bronze diamond",300,300)
   }
 }
 }
 /*if(gameState===1){
   background("white")
   text("You lose",400,400) 
   text("Time USED:"+TimeUsed+"to play again press ctrl+r",400,400)
   FireCircle.destroy();
   waterCircle.destroy();
   ground1.destroy();
   ground.destroy();
  ground2.destroy()
ground3.destroy()
   ground4.destroy()
  waterGroup.destroyEach()
   fireGroup.destroyEach()
  balancerVanisher.destroyEach()
   fire.destroy()
   goose.destroy()
  goose.destroy()
   gameState=1;
  PaddleBasedWall.destroy()
   PaddleBasedWallButton1.destroy()
   PaddleBasedWallButton2.destroy()
   background("white")
 }*/
 //call a function drawSprites to draw objects/elements of the game
 //console.log(gameState)
// drawSprites()
// if(gameState===1){
//   //background("white")
//   text("You lose",400,400) 
//   text("Time USED:"+TimeUsed+"to play again press ctrl+r",400,400)
//   FireCircle.destroy();
//   waterCircle.destroy();
//   ground1.destroy();
//   ground.destroy();
//   ground2.destroy()
//   ground3.destroy()
//   ground4.destroy()
//   waterGroup.destroyEach()
//   fireGroup.destroyEach()
//   balancerVanisher.destroyEach()
//   //fire.destroy()
//  // goose.destroy()
//   goose.destroy()
//   gameState=1;
//  // PaddleBasedWall.destroy()
//   //PaddleBasedWallButton1.destroy()
//   //PaddleBasedWallButton2.destroy()
//   //background("white")
// }
// //end function draw

// //start function drawBalancersAndAdaptiviters
// //accept argument x,y,width,height,shapeColor
function drawBalancersAndAdaptiviters(x,y,width,height,shapeColor){
  //add code to create sprite
  this.Balancers=createSprite(x,y,width,height);

  //add code to add shape color to sprite
  this.Balancers.shapeColor=shapeColor;
  balancerVanisher.add(this.Balancers)
  }
  //end funtion drawBalancersAndAdaptiviters

  //start function drawDiamonds
  //accept argument x,y,width,height,shapeColor
  function drawDiamonds(x,y,width,height,shapeColor){
      //add code to create sprite
    this.diamonds=createSprite(x,y,width,height);

      //add code to add shape color to sprite
    this.diamonds.shapeColor=shapeColor;
    }
    //end function drawDiamonds

//     //start function drawGoals
//       //accept argument x,y,width,height,shapeColor
    function drawGoals(x,y,width,height,shapeColor){
            //add code to create sprite
      this.goal=createSprite(x,y,width,height);

           //add code to add shape color to sprite
      this.goal.shapeColor=shapeColor;
      //balancerVanisher.add(this.goal)
      doorGroup.add(this.goal)
      }
      //end function drawGoals
    //  function keyPressed(){
     //   if(keyCode==38){
       //   FireCircle.velocityY=-16
       // }
   //   }