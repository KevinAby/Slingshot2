class SlingShot{
    constructor(body1,point2){
var options={

    bodyA:body1,
     pointB:point2,
     stiffness: 0.6,
     length:20
     
    }

    this.sling=Constraint.create(options)
    World.add(world,this.sling)
    }
      
    fly() {

        this.sling.bodyA=null

    }
    
    
      
    show(){
        if(this.sling.bodyA){
            
        }
    var pointA= this.sling.bodyA.position
    var pointB= this.sling.pointB
    strokeWeight(3)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}