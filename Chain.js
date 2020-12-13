class Chain
{
    constructor(body1,point1)
    {
        var options={
            bodyA:body1,
            pointB: point1,
            stiffness:0.004,
            length:1
        }
        this.bodyA=body1;
        this.pointB=point1;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }

    attach(body)
    {
        this.chain.bodyA=body;
    }
    fly()
    {
        this.chain.bodyA=null;

    }
    display()
    {
        if(this.chain.bodyA)
        {
            var pa=this.bodyA.position;
            var pb=this.pointB;
            line(pa.x,pa.y,pb.x,pb.y);
        }
    }
}