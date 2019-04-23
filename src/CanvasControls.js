/**
 *
 * @param name   - This Value Becomes The id for the Canvas.
 * @param width  - The Width of the Canvas as a string "480"
 * @param height - The height of the Canvas as a string "480"
 */
function makeCanvas(name, width, height) {
  let w = width || (window.innerWidth * 0.75).toString();
  let h = height || ((3 * window.innerHeight) / 4).toString();
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.setAttribute("id", name);
  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);
  return canvas;
}
function drawBackground(color) {
  ctx.fillStyle = `${color}`;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function drawSquare(x,y,color){
  ctx.fillStyle = color
  ctx.fillRect(x,y,28,28);
}
function clearSquare(x,y){
  ctx.fillStyle = "gray";
  ctx.clearRect(x, y, 28, 28);
  ctx.fillRect(x,y,28,28);
}
