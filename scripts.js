var x; var y; var dirX; var dirY; var pos2; var ctx;

function setup() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  x = width/2; y = height/2;
  dirX = -1; dirY = -1;
  pos2 = height/2;
  p1 = 0; p2 =0;
}

function draw() {
  ctx.background(0,200,0);
  ctx.stroke(10); 
  ctx.line(width/2,0,width/2,height);
  ctx.rect(20,mouseY,10,40);
  ctx.rect(width-30,pos2,10,40);
  if(keyIsDown(UP_ARROW)){pos2 = pos2 - 4;}
  if(keyIsDown(DOWN_ARROW)){pos2 = pos2 + 4;}
  ctx.ellipse(x,y,10,10);
  x = x + (3 * dirX);
  y = y + (3 * dirY);
  if(y > height){dirY = -1;}
  if(y < 0){dirY = 1;}
  if(x < 30){
    if(y > mouseY && y < mouseY + 40){dirX = 1;}
    if(x < 20) {x = width/2; y = height/2;
        p2++       }
    }
    if(x > width-39){
      if(y > pos2 && y < pos2 + 40){dirX = -1;}
      if(x > width-20) {x = width/2; y = height/2;
         p1++              }
  }      
  ctx.textSize(30);
  ctx.fill(255);
  ctx.text(p1,150,30)
  ctx.text(p2,450,30)
}

setup();
draw();






