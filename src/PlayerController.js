document.addEventListener("keydown", keyPressed, false);

function keyPressed(e) {
var keyCode = e.keyCode;
  if(keyCode==68) {// D
  player.move(1, 0, "d");
  }
  if(keyCode==87) {// W
  player.move(0, -1, "w");
  }
  if(keyCode==83) {// S
  player.move(0, 1, "s");
  }
  if(keyCode==65) {// A
  player.move(-1, 0, "a");
  }
}
