class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length : 50
        }
    
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
}
fly(){
    this.chain.bodyA = null;
}
display() {
    strokeWeight(10);
    if(this.chain.bodyA){
        push();
        stroke(48,22,8);
        pop();
    line(this.chain.bodyA.position.x+10, this.chain.bodyA.position.y+10, this.chain.pointB.x, this.chain.pointB.y);
    }
}

attach(bodyA){
    // this.chain.bodyA != null;
   this.chain.bodyA = bodyA;
     line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
 }
}
