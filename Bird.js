class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.path = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.position.x>220 && this.body.velocity.x>10){
      var position = [this.body.position.x,this.body.position.y];
      this.path.push(position);
    }

    //               x      y    x    y      x   y     x   y
    //this.path = [[200, 190], [205, 185], [210,180], [215, 175]..........]
    //i                 0           1           2           3
    //sub-index       0   1       0     1     0     1    0   1

    //initial condition; end condititon; in-between condition
    for(var i = 0;  i < this.path.length; i= i+1){
      image(this.smokeImage, this.path[i][0], this.path[i][1]);
    }


    
  }
}
