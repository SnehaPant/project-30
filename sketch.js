
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var polygon

function preload()
{
	polygon_img=loadImage('polygon.png')
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground=new Ground(500,500,300,10)
	 box1=new Box(400,455,50,80)
	 box2=new Box(460,455,50,80)
	 box3=new Box(520,455,50,80)
	 box4=new Box(580,455,50,80)
	 box5=new Box(430,375,50,80)
	 box6=new Box(490,375,50,80)
	 box7=new Box(550,375,50,80)
	 box8=new Box(460,295,50,80)
	 box9=new Box(520,295,50,80)
	 box10=new Box(490,215,50,80)
	polygon=new Polygon(200,500,50)
	 rope=new Rope(polygon.body,{x:100,y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('pink');
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
 polygon.display()
  rope.display()
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	rope.fly()
  }
  function keyPressed(){
    if(keyCode==32){
      rope.attached(polygon.body)
	}
}