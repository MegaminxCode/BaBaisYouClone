//! Global Name Space
let canvas, ctx, rock, player, push , is, walls, wallLength ;
(() => setup())();

function setup() {
  is = new isBlock(3, 4, null, null);
  player = new block("black", "player", 0, 0);
  push = new textBlock("lime", "push", 2, 4);
  walls = new Array;
  walls[0] = new Walls(2, 0);
  walls[1] = new Walls(4, 0);
  wallLength = walls.length;
  rock = new textBlock("saddleBrown", "rock", 4, 4);
  rock2 = new block("saddleBrown", "rock", 4, 8);
  makeCanvas(canvas, 480, 480);
  drawBackground("gray");
  drawGrid();
  drawGrid();
  draw();
}

function draw() {
  for(let i = 0; i < wallLength; i++){
    walls[i].show();
  }
  player.show();
  push.show();
  is.show();
  rock.show();
  rock2.show();
  rock2.move(5, 5);
}

function draw2() {
  push.reShow();
  is.reShow();
  rock.reShow();
  rock2.reShow();
  player.reShow();
}

function loop() {


}