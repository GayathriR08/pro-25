class Dustbin{

    constructor(x,y,w,h){
    var ops={
        isStatic:true
         
    
    }
    this.bbody=Bodies.rectangle(x,y,w,h,ops);
    World.add(world,this.bbody)

    this.lbody=Bodies.rectangle(x-90,y-60,w,h,ops);
    World.add(world,this.lbody)

    this.rbody=Bodies.rectangle(x+90,y-60,w,h,ops);
    World.add(world,this.rbody)
     this.image=loadImage("dustbingreen.png");
    
    
    
    
    }
    
    
    
    
    display(){
    var bpos = this.bbody.position;
    var lpos = this.lbody.position;
    var rpos = this.rbody.position;
    push();
    translate(bpos.x,bpos.y)
    rotate(this.bbody.angle)
    fill("yellow");
    imageMode(RADIUS)
    image(this.image,0,0,200,400)
    pop ();

    
    push();
    translate(lpos.x,lpos.y)
    rotate(this.lbody.angle)
    fill("yellow");
    rectMode(RADIUS)
    rect(0,0,10,50)
    pop ();

    push();
    translate(rpos.x,rpos.y)
    rotate(this.rbody.angle)
    fill("yellow");
    rectMode(RADIUS)
    rect(0,0,10,50)
    pop ();

    }
    
    
    
    }