/*
blocks are always 30 pixel square
they have custom rules depending on whats around them
blocks can be different colors
player can push blocks
some blocks cant be push if other blocks are not around
*/
class block{
    constructor(color,name,x,y){
        this.color = color;
        this.pushable = true;
        this.name = name
        this.position = new Vector(x, y)
    }
    show(){
        this.position.mult(30);
        drawSquare(this.position.x + 1,this.position.y + 1,this.color);
    }
    reShow(){

      drawSquare(this.position.x + 1,this.position.y + 1,this.color);
    }
    move(x, y){
      this.offset = new Vector(x, y);
      this.offset.mult(30);
      drawSquare(this.position.x + this.offset.x + 1,this.position.y + this.offset.y + 1,this.color);
      clearSquare(this.position.x + 1,this.position.y + 1);
      this.position.x += this.offset.x;
      this.position.y += this.offset.y;
      draw2();
    }
}

class textBlock extends block{

    constructor(color, name, x, y){
        super(color,name, x, y)
    }
}

class isBlock extends block{
    constructor(x, y, what, how){
        super("white","IS", x, y)
        this.what = what;
        this.how = how;
    }

}

class Walls extends block{
    constructor(x,y){
        super("pink","wall",x,y)
    }
}
