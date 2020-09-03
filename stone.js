class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.3
		}
		this.body=Bodies.circle(x, y, radius, options);
		this.x=x;
		this.y=y;
		this.radius=radius;
        this.image = loadImage("stone.png");
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		translate(stonePos.x,stonePos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius*2, this.radius*2);
		pop()
 }
}