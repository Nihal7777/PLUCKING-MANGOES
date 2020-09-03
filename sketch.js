
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mangoTree,boyImg,boy,stoneObject,ground,chain,boyShot;

function preload()
{
	boyImg = loadImage("boy.png");
}



function setup() {
	createCanvas(1000, 600);

  boy = createSprite(150,530);
  boy.addImage(boyImg);
  boy.scale=0.1;
  
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	mango1 = new Mango(745,150,30,30);
	mango2 = new Mango(710,250,30,30);
	mango3 = new Mango(550,250,30,30);
	mango4 = new Mango(950,250,30,30);
	mango5 = new Mango(800,250,30,30);
	mango6= new Mango(820,150,30,30);
	mango7 = new Mango(745,350,30,30);
	mango8 = new Mango(500,150,30,30);
	ground =new  Ground(200,596,2000,5);
	boyShot = new Chain(stone.body,{x:150,y:500});


	mangoTree = new Tree(700,320);
	
  stoneObject = new Stone(750,550,20);
 
  






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
  mangoTree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground.display();
  stoneObject.display();
  boyShot.display();
  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyShot.fly();
}

function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.radius+stone.radius){
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}



