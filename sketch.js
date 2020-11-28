var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundSprite=createSprite(width/2, height-5, width,10);
	groundSprite.shapeColor=color(255)



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,isStatic:true});
	World.add(world, packageBody); 


	
	log1=new log(400,650,10,80)
	log2=new log(365,630,80,10)
	log3=new log(435,630,80,10)
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  log1.display();
  log2.display();
  log3.display();
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 keyPressed()

  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5});
	
	Matter.Body.setStatic(packageBody,false);
	 
	
	
//	return packageSprite();
	
  }
}



