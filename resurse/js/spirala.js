// III. 1) - a)
window.onload = function()
{
  var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
ctx.lineWidth = 3;
ctx.strokeStyle = "green";
function drawSpiral(time) {
    var angOff, gap, steps, increment, theta, newX, newY;
   
    angOff = time / -60;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    gap = 10;
    steps = 60;
    increment = 2 * Math.PI / steps;
    theta = increment;
    while (theta < 20 * Math.PI) {
        newX = centerX + theta * Math.cos(theta + angOff) * gap;
        newY = centerY + theta * Math.sin(theta + angOff) * gap;
        ctx.lineTo(newX, newY);
        theta = theta + increment;
    }
    ctx.stroke();
}
function update(time) { 

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSpiral(time);
    requestAnimationFrame(update); 
}

requestAnimationFrame(update);
}