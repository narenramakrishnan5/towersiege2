const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var holder,ball,ground
var stand1,stand2
var ball
var slingshot
var block1,block2,block3,block4,block5,block6,block7,block8

function setup() {
engine=Engine.create()
world=engine.world;

createCanvas(900,400)

ground=new Ground()
stand1=new Stand(380,300,270,10)
stand2=new Stand(700,200,200,10)

block1=new Block(280,275,30,40)
block2=new Block(310,275,30,40)
block3=new Block(340,275,30,40)
block4=new Block(370,275,30,40)
block5=new Block(400,275,30,40)
block6= new Block(430,275,30,40)
block7=new Block(460,275,30,40)
block8=new Block(490,275,30,40)
slingShot=new slingshot(this.ball,{x:200,y:200})
}
function draw(){
    background("brown")
    Engine.update(engine)
    ground.display()
    stand1.display()
    stand2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
   ellipse(ball.position.x,ball.position.y,20)
    slingShot.display()
}
function mouseDRagged(){
    Matter,Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly
}
function keyPressed(){
    if(keyCode==32){
        slingShot.attach(this.ball)
    }
}