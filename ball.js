class Ball {
    constructor(x,y){
    
        this.body = Bodies.circle(x,y,20)
        this.radius = 20;

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,40,40)

    }
    

};