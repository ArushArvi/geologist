class Iron{
    constructor(x,y,width,height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
            World.add(world,this.body);

        var options={
            restitution: 0.8,
            frction: 3,
            density: 30
    
        }   
    } 
     display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, this.width, this.height)
     }
}
