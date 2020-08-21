var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(10, 50, 60, 60);
ctx.fillStyle = "#FEA47F";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(230, 150, 100, 0, Math.PI*2, false);
ctx.fillStyle = "#9AECDB";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(230, 150, 100, 70);
ctx.strokeStyle = "#6D214F";
ctx.stroke();
ctx.closePath();