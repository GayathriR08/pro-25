class Paper{

constructor(x,y,r){
var ops={
    isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:1.2

}
this.body=Bodies.circle(x,y,r,ops);
World.add(world,this.body)

this.image=loadImage("paper.png");
    



}




display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y)
rotate(this.body.angle)
imageMode(RADIUS)
image(this.image,0,0,40,40)
pop ();


}



}