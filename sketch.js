const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground;

var stand1,stand2;
var ball;

var slingshot;


function setup(){
    var canvas = createCanvas(1200,400)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,10)
    stand1 = new Ground(390,300,250,10)
    stand2 = new Ground(700,200,200,10)
    ball = new Ball(50,200)
    slingshot = new Slingshot(ball.body,{x:100,y:200})
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
    ball.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    slingshot.fly()
}
