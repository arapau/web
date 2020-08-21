var canvas, ctx, x, y, dx, dy, ballRadius;

function setup() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  x = canvas.width/2;
  y = canvas.height-30;
  dx = 2;
  dy = -2;
  ballRadius = 10;
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2, false);
  ctx.fillStyle = '#82589F';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}


setup()
setInterval(draw, 10);
