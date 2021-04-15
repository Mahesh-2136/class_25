class Log extends parent {
    constructor(x,y,h,a){

    super(x,y,20,h,a);
    this.img = loadImage("wood2.png")
    Matter.Body.setAngle(this.body,a)
    }

  };
  