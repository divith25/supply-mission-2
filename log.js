class log {
    constructor(x,y,height,width){
      var options={
        isStatic:true
      }
      
     
     // Matter.Body.setAngle(this.body, angle);
    
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        
        World.add(world, this.body);
    }
      display(){
       var pos =this.body.position
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,this.width,this.height)
      }
  }