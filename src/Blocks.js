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
    move(x, y, key){

      this.offset = new Vector(x, y);
      this.offset.mult(30);
      if(this.checkOutofBounds(this.offset.x, this.offset.y, key))
      if(this.checkCollision(walls, wallLength, this.offset.x, this.offset.y)){
      drawSquare(this.position.x + this.offset.x + 1,this.position.y + this.offset.y + 1,this.color);
      clearSquare(this.position.x + 1,this.position.y + 1);
      this.position.x += this.offset.x;
      this.position.y += this.offset.y;
      draw2();
    }
    }
    checkCollision(array, arrayLength, offsetX, offsetY){
      let ok = true;
      for(let i = 0; i < arrayLength; i++){
        if((this.position.x + offsetX) === array[i].position.x && (this.position.y + offsetY) === array[i].position.y ){
          ok = false;
        }
      }
      return ok;
    }
    checkOutofBounds(offsetX, offsetY, key){
      let ok = true;
      switch(key){
        case "w":
        if((this.position.y + this.offset.y) < 0){
          ok = false;
        }
        break;

        case "a":
        if((this.position.x + this.offset.x) < 0){
          ok = false;
        }
        break;

        case "d":
        if((this.position.x + this.offset.x) > (canvas.width - 30)){
          ok = false;
        }
        break;

        case "s":
        if((this.position.y + this.offset.y) > (canvas.height - 30)){
          ok = false;
        }
        break;

      }
      return ok;
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
