const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box;


function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world =  engine.world;

  box1 = new Box(750,600,150,400);
  box2 = new Box(850,600,100,500);
  box3 = new Box(650,600,100,500);
  box4 = new Box(950,600,100,600);
  box5 = new Box(550,600,100,600);
  box6 = new Box(500,600,50,700);
  box7 = new Box(1000,600,50,700);
}

function draw() {
  background("black");  

  Engine.update(engine);
  fill('blue');
  triangle(750,300,600,600,900,600);
  triangle(500,150,475,250,525,250);
  triangle(1000,150,975,250,1025,250);
  
  fill("white");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();


}
