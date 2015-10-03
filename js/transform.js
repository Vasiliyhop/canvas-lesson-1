/*exported transform*/
function transform(canvas, ctx) {
	'use strict';
    
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    for (var i = 0; i < 16; i++) {
        ctx.lineWidth = 10;
        ctx.fillStyle = '#cfc';
        ctx.strokeStyle = '#484';
        ctx.strokeRect(0, - 200, 100, 200);
        ctx.fillRect(0, - 200, 100, 200);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#363';
        ctx.font = '30pt Calibri';
        ctx.textAlign = 'center';
        ctx.strokeText(i+1, 50, -150);
        ctx.font = '15pt Calibri';
        ctx.lineWidth = 1.5;
        ctx.strokeText('La\'Soft', 50, -100);
        ctx.rotate(Math.PI / 8);
    }
    ctx.restore();
}