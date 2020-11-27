const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var bob1,bob2,bob3,bob4,bob5,bob6

var roof,canvas,chain

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

bob1 = new Bob(600,350,50)
bob2 = new Bob(400,350,50)
bob3 = new Bob(500,350,50)
bob4 = new Bob(800,350,50)
bob5 = new Bob(700,350,50)
bob6 = new Bob(300,350,50)
roof = createSprite(550,100,600,30)
chain = new Chain(bob6.body,{x:200, y:50})
}
function draw(){
    background(0,0,0)
    bob1.display()
    bob2.display()
    bob3.display()
    bob4.display()
    bob5.display()
    bob6.display()
drawSprites()
}