/*exported curves*/
function curves(canvas, ctx) {
	'use strict';
    
    ctx.save();
    ctx.beginPath();
    ctx.arc(200, 200, 100, 1.1 * Math.PI, 1.9 * Math.PI, false);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#cfc';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(388, 200);
    ctx.quadraticCurveTo(488, 0, 588, 200);
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(88, 430);
    ctx.bezierCurveTo(140, 210, 288, 210, 288, 470);
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 430);
    ctx.bezierCurveTo(440, 210, 540, 450, 688, 270);
    ctx.lineTo(700, 400);
    ctx.lineWidth = 10;
    ctx.closePath();
    ctx.stroke();
    var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    // light blue
    grd.addColorStop(0, '#8ED8FF');
    // dark blue
    grd.addColorStop(1, '#004aB3');
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.restore();

    var grd = ctx.createRadialGradient(350, 260, 0, 350, 260, 50);
    grd.addColorStop(0, '#cfc');
    grd.addColorStop(0.6, 'blue');
    grd.addColorStop(1, '#369');
    ctx.fillStyle = grd;
    ctx.fillRect(300, 210, 100, 100);
}