class Mango
{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image=loadImage("plucking mangoes/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
       
        //this.image.scale=0.5;
        World.add(world,this.body);
    }

    display()
    {
        var pos =this.body.position;
      //noStroke();
      push();
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      fill(255,0,255)
	    imageMode(CENTER);
		ellipseMode(CENTER)
     
      // Small ball bcoz ellipse excepts a diameter. So what you can do is use ellipseMode(RADIUS) instead of CENTER
      //ellipse(0, 0, this.radius,this.radius);
      image(this.image,0,0, this.r*2, this.r*2);
      pop();
    }
}


