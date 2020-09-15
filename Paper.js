class Paper{

    constructor(x,y,r){
        var Paper_Options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.r=r
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x,this.y,this.r/2,Paper_Options);
        World.add(world, this.body);
        }
        
        display(){
            var pos = this.body.position
            var angle = this.body.angle
       
          
        push()        
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(CENTER);
        strokeWeight(3);
        stroke("Black")
        fill("White");
        ellipse(0,0,this.r,this.r);
        pop()    
        }

}