//Declaring variables and constants
var ground,paperObject;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{}

function setup() {
	//creating canvas and placing it in center
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//creating sprites
	engine = Engine.create();
	world = engine.world;

	paperObject=new Paper(80,600,30);

	body1=new Dustbin(620,590,10,80,-10);
	body2=new Dustbin(680,590,10,80,10);
	body3=new Dustbin(650,625,60,10);

	/*rect1=createSprite(body1.position.x,body1.position.y,10,80); 
	rect1.rotation= -10;
	rect1.shapeColor="White"

	rect2=createSprite(body2.position.x,body2.position.y,10,80);
	rect2.rotation= 10;
	rect2.shapeColor="White"

	rect3=createSprite(body3.position.x,body3.position.y,60,10);
    rect3.shapeColor="White"
*/
	groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor = "Green"

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 635, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	//make the engine start 
	Engine.run(engine);

}	


function draw() {
  rectMode(CENTER);
  background(rgb(168,224,255));

  //making the paper bounce off from the box
   

  drawSprites();
  
  //making more ground
  fill("Green");
  rect(400,680,800,100);
 
  paperObject.display();
  body1.display();
  body2.display();
  body3.display();

}

//making keyDown function

function keyPressed() {
 if (keyCode === UP_ARROW) {
 
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-35});

  }
}



