class Dustbin{
    constructor(x,y) {
    
        var options = {
            'restitution':0.4,
            //'friction':1.0,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, options);
        World.add(world, this.body);
        this.dustbin = loadImage("sprites/dustbingreen.png");
        
      }
      display(){
        
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        image(this.dustbin,650,620,140,140);
        
        
        pop();
      }
}