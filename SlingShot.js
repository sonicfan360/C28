class slingShot {
    constructor(bird, newPoint){
    // create the coptions - bodyA, bodyB, stiffness, length    

    var options = {bodyA : bird, 
        pointB : newPoint,
        stiffness: .04,
        length: 10,
}

//create the contraint by giving options
this.sling = Matter.Constraint.create(options)
World.add(world,this.sling)

    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
                //line is between two points
        //bird position - x1, y1
        //log_2 position - x2,y2
        if(this.sling.bodyA)
        {
            var firstpos = this.sling.bodyA.position;
            var Secpos = this.sling.pointB;
            line(Secpos.x, Secpos.y, firstpos.x, firstpos.y)
        }

    }
   
}
