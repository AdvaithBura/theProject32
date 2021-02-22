class Polygon{
    constructor(x,y,height,width){
        this.body = Bodies.circle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/polygon.png");
        World.add(world, this.body);
    }
    display(){
       // ellipse(this.body.position.x, this.body.position.y, this.body.width, this.body.height);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width*2, this.height*2);
    }
}