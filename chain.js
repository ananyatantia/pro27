class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= pointB
        this.bodyA = Constraint.create(options);
        World.add(world, this.roof);
    }

  
    
   display(){
    if(this.sling.bodyA){
        var pointA = this.roof.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}