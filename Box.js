class Box{

    constructor(x,y,width,height){
    
    var option = {
    
    restitution: 0.8,
     friction: 1 ,
     density :1
    
    }
    
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.body);
    
    
    
    }
    
        display(){
            var  pos = this.body.position
            var angle = this.body.angle;
           
    
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            stroke('green');
            fill(255);
            rect(0,0,this.width,this.height);

 



            }
    
        tint(){
            if(this.body.speed < 3){
                display();
                }
                else{
                  World.remove(world, this.body);
                  push();
                  this.Visiblity = this.Visiblity - 5;
                  tint(255,this.Visiblity);
             
                  image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             
                  pop();
             
             
                } 
        }
  
    }