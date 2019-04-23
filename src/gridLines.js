/**
 * @function DrawLine - Draws a line from specified x , y to a spcified point
 * @param {*} x - starting X
 * @param {*} y - Starting Y
 * @param {*} Height - canvas height if needed
 * @param {*} width  - canvas width  if needed
 */
function drawLine(x, y, height, width) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y + height);
  ctx.stroke()
  ctx.closePath();
}

function drawGrid() {
  for (let i = 0; i <= canvas.width; i += canvas.width / 16) {
    drawLine(i, 0, canvas.height, 0);
  }
  for(let i = 0 ; i <= canvas.height; i += canvas.height/16){
      drawLine(0,i,0,canvas.width);
  }
}

