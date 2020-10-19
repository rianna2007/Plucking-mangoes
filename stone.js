class Stone {
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
    }
}



{
        this.Stone = loadImage('sprites/stone.png');
        this.Stone = Constraint.create(options);
        World.add(world, this.Stone);
    }
    attach(boy){
        this.stone.bodyA = boy;
    }
    
    fly(){
        this.sling = null;
    }

    display(){
        image(this.stone,170,50);
        if(this.stone){
            var stone = this.Stone, 170, 50;
            push();
        
            else{
                strokeWeight(3);
                var stone=this.Stone, 460, 45;
            }
           
            
            pop();
        }
    }
    
}
