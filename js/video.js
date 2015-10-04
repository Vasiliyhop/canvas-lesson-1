/*exported videos, stopVideo*/
var animation;
function videos(canvas, ctx, video) {
	'use strict';

    function drawFrame(ctx, video){
        ctx.drawImage(video, 0, 75);
        var imgData = ctx.getImageData(0, 0, 800, 600);
        var data = imgData.data;
        for (var i = 0; i < data.length; i += 4) {
            data[i] = 255 - data[i];
            data[i + 1] = 255 - data[i + 1];
            data[i + 2] = 255 - data[i + 2];
        }
        ctx.putImageData(imgData,0,0);
        animation = requestAnimationFrame(function(){
            drawFrame(ctx, video);
        });
    }
    drawFrame(ctx, video);
}
function stopVideo(){
    'use strict';

    window.cancelAnimationFrame(animation);
    animation = undefined;
}