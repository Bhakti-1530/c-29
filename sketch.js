const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;
var polygon;
var slingShot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18;
var block19, block20, block21;
function setup() {
 var canvas = createCanvas(800,400);
 // createSprite(400, 210, 50, 50);

 engine = Engine.create();
 world = engine.world;

  ground = new Ground(407,350,300,20);
  
  block1 = new Box(150, 160, 30, 40);
  block2 = new Box(165, 160, 30, 40);
  block3 = new Box(180, 160, 30, 40);
  block4 = new Box(195, 160, 30, 40);
  block5 = new Box(210, 160, 30, 40);
  block6 = new Box(225, 160, 30, 40);
  block7 = new Box(240, 160, 30, 40);
  block8 = new Box(255, 160, 30, 40);
  // 2 levele
  
  block9 = new Box(165, 140, 30, 40);
  block10 = new Box(180, 140, 30, 40);
  block11 = new Box(195, 140, 30, 40);
  block12 = new Box(210, 140, 30, 40);
  block13 = new Box(225, 140, 30, 40);
  block14 = new Box(240, 140, 30, 40);
  // 3 
  fill('yellow');
  block15 = new Box(180, 120, 30, 40);
  block16 = new Box(195, 120, 30, 40);
  block17 = new Box(210, 120, 30, 40);
  block18 = new Box(225, 120, 30, 40);
  // 4
  fill('pink');
  block19 = new Box(195, 100, 30, 40);
  block20 = new Box(210, 100, 30, 40);
  block21 = new Box(202, 80, 30, 40);
  
  var polygon_options={
    isStatic: true
  }
  polygon= Bodies.circle(50,200,20,polygon_options);
  World.add(world,polygon);

  slingShot = new SlingShot(polygon,{x:100,y:200});

}

function draw() {
  background(0);
    Engine.update(engine);  
  
  ground.display();
  fill('red');
  block1.display(); 
  block2.display(); 
  block3.display(); 
  block4.display(); 
  block5.display(); 
  block6.display(); 
  block7.display(); 
  block8.display();
  fill('orange'); 
  block9.display(); 
  block10.display(); 
  block11.display(); 
  block12.display(); 
  block13.display(); 
  block14.display(); 
  fill('yellow');
  block15.display(); 
  block16.display(); 
  block17.display(); 
  block18.display(); 
  fill('pink');
  block19.display(); 
  block20.display(); 
  block21.display(); 
  slingshot.display();
  polygon.display();
  
  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(polygon, {x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}