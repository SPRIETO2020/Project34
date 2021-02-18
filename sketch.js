const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backIMG;
var ground, hero, fly, monster;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20, block21;
var block22, block23, block24, block25, block26;


function preload() {
  backIMG = loadImage("images/GamingBackground.png");
}


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1250,20);
  hero = new Hero(300, 400, 450, 250)
  fly = new Fly(hero.body, {x:320, y:80});
  monster = new Monster(1150, 345, 300);

  //column 1
  block1 = new Blocks(650, 555, 70, 70);
  block2 = new Blocks(650, 485, 70, 70);
  block3 = new Blocks(650, 415, 70, 70);
  block4 = new Blocks(650, 345, 70, 70);
  block5 = new Blocks(650, 275, 70, 70);
  block6 = new Blocks(650, 275, 70, 70);
  block7 = new Blocks(650, 135, 70, 70);

  //column 2
  block8 = new Blocks(745, 555, 70, 70);
  block9 = new Blocks(745, 485, 70, 70);
  block10 = new Blocks(745, 415, 70, 70);
  block11 = new Blocks(745, 345, 70, 70);
  block12 = new Blocks(745, 275, 70, 70);
  block13 = new Blocks(745, 275, 70, 70);

  //cloumn 3
  block14 = new Blocks(840, 555, 70, 70);
  block15 = new Blocks(840, 485, 70, 70);
  block16 = new Blocks(840, 415, 70, 70);
  block17 = new Blocks(840, 345, 70, 70);
  block18 = new Blocks(840, 275, 70, 70);
  block19 = new Blocks(840, 275, 70, 70);
  block20 = new Blocks(840, 135, 70, 70);
  block21 = new Blocks(840, 65, 70, 70);

  //column 4
  block22 = new Blocks(935, 555, 70, 70);
  block23 = new Blocks(935, 485, 70, 70);
  block24 = new Blocks(935, 415, 70, 70);
  block25 = new Blocks(935, 345, 70, 70);
  block26 = new Blocks(935, 275, 70, 70);
}


function draw() {
  background(backIMG);
  Engine.update(engine);

  ground.display();
  hero.display();
  monster.display();

  //cloumn 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //column 2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  //column 3
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //column 4
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
}


function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}