class Ball{
    constructor(x,y,radius){
        var options = {
            'isStatic': false,
            'restitution': 1,
            'friction': 1,
            'density': 0.3
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("green"); 
        ellipse(this.body.position.x,this.body.position.y,45,45);
        
    }
}