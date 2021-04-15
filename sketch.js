const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,500,100,100);
    box2 = new Box(700,500,100,100);
    st = new Log(600,490,400,PI/2)
    en = new Pig(600,550,70,70)


    box4 =new Box(500,200,100,100);
    box5 = new Box(700,200,100,100);
    en1 = new Pig(600,200,70,70);
    st1 =new Log(600,190,400,PI/2)

    box3 =new Box(600,100,100,100);
    st2 =new Log(700,90,210,PI/1.2);
    st3 =new Log(500,90,210,PI/6)
    g1 = new ground(400,580,910,30);

    an =new bird(100,100)
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    g1.display();
    en.display();
    st.display();
    box4.display();
    box5.display();
    st1.display();
    en1.display();
    st2.display();
    box3.display();
    st3.display();
    an.display();
}