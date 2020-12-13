class Stone {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("plucking mangoes/stone.png");
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //noStroke();
      push();
      translate(pos.x,pos.y)
      fill(255,0,255)
	    imageMode(CENTER);
		ellipseMode(RADIUS)
     
      // Small ball bcoz ellipse excepts a diameter. So what you can do is use ellipseMode(RADIUS) instead of CENTER
      //ellipse(0, 0, this.radius,this.radius);
      image(this.image,0,0, this.r*2, this.r*2);
      pop();
    }
  };



