var canvas, ctx, x, y, dx, dy, ballRadius, color, image;

function setup() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  x = canvas.width/2;
  y = canvas.height-30;
  dx = 2;
  dy = -2;
  ballRadius = 10;
  color = '#82589F';
  image = document.getElementById('source');
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();  
}

function drawImage() {
  ctx.drawImage(image, x, y, 50, 50);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBall();
  drawImage();
  
  if(x + dx > canvas.width - 50 || x + dx < 1) {
    dx = -dx;
    color = '#D6A2E8';
  }

  if(y + dy > canvas.height - 32 || y + dy < 1) {
    dy = -dy;
    color = '#B33771';
  }

  x += dx;
  y += dy;
}


setup()
setInterval(draw, 10);
