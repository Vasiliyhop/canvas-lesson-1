/*exported images*/
/*global stackBlurCanvasRGBA*/
function filter(canvas, ctx){
    'use strict';

    // make grayscale filter
    var imgData1 = ctx.getImageData(25, 25,400, 250),
        data = imgData1.data;

    for (var i = 0; i < data.length; i += 4) {
        var average,
            r = data[i],
            g = data[i + 1],
            b = data[i + 2];

        average = (r + g + b)/ 3;

        data[i] = average;
        data[i + 1] = average;
        data[i + 2] = average;
    }

    ctx.putImageData(imgData1,25,325);
    //...........................

    var imgData2 = ctx.getImageData(475, 25,300, 250);
    ctx.putImageData(imgData2,475,325);
    stackBlurCanvasRGBA( 'canvas', 475, 325, 300, 250, 10 );

    var dataURL = canvas.toDataURL();
    console.log(dataURL);
}
function images(canvas, ctx) {
	'use strict';
    
    var imageObj = new Image();

    imageObj.onload = function() {
        ctx.drawImage(imageObj, 25, 25, 400, 250);
        ctx.drawImage(imageObj, 100, 0, 600, 500, 475, 25, 300, 250);
        filter(canvas, ctx);
    };
    imageObj.src = 
        'resources/images/most-beautiful-flowers.jpg';
}