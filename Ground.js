class Ground {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //noStroke();
      rectMode(CENTER);
      fill(128,128,128)
      rect(pos.x, pos.y, this.width, this.height);
    }
  };