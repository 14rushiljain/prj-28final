
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var launchingForce=100;
function preload()
{
	boy=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(1050,580);
	g=new Ground(width/2,690,width,20);
	s=new Stone(120,300,30);
	m1=new Mango(1100,100,30);
	m2=new Mango(970,230,30);
	m3=new Mango(900,180,30);
	m4=new Mango(870,250,30);
	m5=new Mango(900,290,30);
	m6=new Mango(1170,230,30);
	l=new Chain(s.body,{x:234,y:420});
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("lightpink");
  image(boy,200,340,200,300);
  tree.display();
  g.display();
  s.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  s.display();
  l.display();
  detectcollision(s,m1);
  detectcollision(s,m2);
  detectcollision(s,m3);
  detectcollision(s,m4);
  detectcollision(s,m5);
  detectcollision(s,m6);
  
 
}
function mouseDragged()
{
	Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
	l.fly();
}

// function detectcollision(l,m)
// {
// 	mp=m.body.position;
// 	lp=l.body.position;

// 	var d=dist(lp.x,lp.y,mp.x,mp.y);
// 	if(d<=m.r+l.r)
// 	{
// 		Matter.Body.setStatic(m.body,false);
// 	}
// }


function detectcollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(s.body, {x:235, y:420}) 
	  l.attach(s.body);
	}
  }

