/*class Hero {
    constructor (x, y, r) {
       var options = {
           isStatic: false,
           density: 1,
           fricitonAir: 1,
       }
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(this.x, this.y, this.r, options);
       World.add(world, this.body);
       this.image = loadImage("../images/Superhero-01.png");
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        //ellipse(0, 0, this.r);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }
}*/

/*class Hero extends BaseClass {
    constructor(x,y){
      super(x,y,450,250);
      this.image = loadImage("images/Superhero-01.png");
    }
  
    display() {
      super.display();
    }
  }*/

  class Hero{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-01.png");
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}