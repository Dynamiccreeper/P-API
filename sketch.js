const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,b3,box4,box5,box6,box7,box8,box9,box10;
var backgroundImg,platform;
var hex, slingShot;
var ground;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;


 ground=new Ground (600,390,1200,5)
    //platform = new Ground(150, 305, 300, 170);

    //box1 = new Box(700,320,70,70);
    
   // box2 = new Box(900,320,70,70);
   b3 = new Box(900, 280,70,70);
    box4 = new Box(1000,320,70,70);
    box5 = new Box(1000,280,70,70);
    box6 = new Box(800,320,70,70);
    box7 = new Box(800, 280,70,70);
    box8 =  new Box(1100,320,70,70);
    box9 = new Box(1100,280,70,70);
    box10 = new Box(760,100,70,70);
    

    hex = new Hex(200,320);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hex.body,{x:200, y:320});
}

function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(4);
    //ground.display();
   // platform.display();
    hex.display();
    b3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
   // box2.display();
    //box1.display();

   
ground.display();

    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){

        slingshot.attach(hex.body);

    }
}
