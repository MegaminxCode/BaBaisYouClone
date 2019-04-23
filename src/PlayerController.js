document.addEventListener("keydown", keyPressed, false);

function keyPressed(e) {
var keyCode = e.keyCode;
  if(keyCode==68) {// D
  player.move(1,0);
  }
  if(keyCode==87) {// W
  player.move(0,-1);
  }
  if(keyCode==83) {// S
  player.move(0,1);
  }
  if(keyCode==65) {// A
  player.move(-1,0);
  }
}
