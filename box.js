class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/box.png");
        //this.image.scale= 0.0002;
        World.add(world, this.body);
        this.alpha=10;
    }
    display(){

        if(this.body.speed>5){
            World.remove(world,this.body);
            //score = score+1;
            push();
            this.alpha = this.alpha-10;
            if(this.alpha<0 && this.alpha> -100){
                score++;
            }
            tint(255,this.alpha);
            
            pop();
            //rect(this.body.position.x, this.body.position.y, this.width, this.height);
           // image(this.image,this.body.position.x, this.body.position.y, width/10, height/10);
            
        } else {
            rectMode(CENTER);
            
          //  image(this.image,this.body.position.x, this.body.position.y, width/10, height/10);
          //  this.image.stroke = "black";
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
        }
    }

    
}