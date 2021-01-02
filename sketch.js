
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper,trashbin;
var whiteZone1;
var whiteZone2;
var whiteZone3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	whiteZone1=createSprite(900,590,20,100);
	whiteZone1.shapeColor=("white");
	whiteZone2=createSprite(1000,630,200,20);
	whiteZone2.shapeColor=("white");
	whiteZone3=createSprite(1100,590,20,100);
	whiteZone3.shapeColor=("white");
	box1=Bodies.rectangle(900,610,20,100);
	World.add(world, this.box1);
	box2=Bodies.rectangle(1000,610,20,100);
	World.add(world, this.box2);
	box3=Bodies.rectangle(1100,610,20,100);
	World.add(world, this.box3);
	paper = new Paper(20,200,20);
	ground = createSprite(800,670,1600,20);
	groundBody=Bodies.rectangle(800,670,1600,20,{isStatic:true});
	World.add(world, this.groundBody);


	//Create the Bodies Here.
	


	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
	Render.run(render)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-10})
	}
}



