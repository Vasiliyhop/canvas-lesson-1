/*exported lines*/
function lines(canvas, ctx) {
	'use strict';
    
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(100,50);
    ctx.lineTo(300,250);
    ctx.lineTo(100,250);
    ctx.lineTo(100,50);
    ctx.strokeStyle = '#cfc';
    ctx.stroke();

    ctx.strokeRect(400,50,200,200);

    ctx.fillStyle = '#cfc';
    ctx.strokeStyle = '#003300';
    ctx.lineWidth = 5;
    ctx.save();
    ctx.shadowColor = '#224422';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.strokeRect(400,350,200,200);
    ctx.restore();
    ctx.fillRect(400,350,200,200);

    ctx.beginPath();
    ctx.strokeStyle = '#cfc';
    ctx.moveTo(100, 450);
    ctx.lineTo(300, 450);
    ctx.lineWidth = 30;
    ctx.lineCap = 'round';
    ctx.stroke();
}