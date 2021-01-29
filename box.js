class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world, this.body);
      }
      display(){
       
        if (this.body.speed>4){
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(this.visibility);
        rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
        console.log(this.visibility)
        }
        else {
          push();
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          strokeWeight(2);
          stroke(0);
          rect(0, 0, this.width, this.height);
          pop();
        }
        
      }
}