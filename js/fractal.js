/*exported fractal, clearFractalInterval*/
var interval;
function fractal(canvas, context, repeatDelay) {
    'use strict';
    var xSize = canvas.width,
        ySize = canvas.height,
        imgData ,
        pixels;

    var Complex = function (re, im) {
        this.re = re || 0;
        this.im = im || 0;
    };
    Complex.prototype.add = function (value) {
            return new Complex(this.re + value.re, this.im + value.im);
        };
    Complex.prototype.sqr = function () {
        return new Complex(this.re*this.re - this.im*this.im,
            2*this.re*this.im);
    };
    Complex.prototype.abs = function () {
        return Math.sqrt(this.re*this.re + this.im*this.im);
    };

    var xmin = -2.0, xmax = 1.0,
        ymin = -1.5, ymax = 1.5,
        ny,nx;

    function draw() {
        imgData = context.createImageData(xSize, ySize);
        pixels = imgData.data;

        var mr0 = 0, mg0 = 0, mb0 = 0;
        
        mr0 = Math.pow(2, Math.ceil(Math.random() * 3 + 2));
        mg0 = Math.pow(2, Math.ceil(Math.random() * 3 + 2));
        mb0 = Math.pow(2, Math.ceil(Math.random() * 3 + 2)); 
        
        var mr1 = 256 / mr0,
            mg1 = 256 / mg0,
            mb1 = 256 / mb0;

        var z, nz, i;

        for (var y = 0; y < ySize; y++) {
            ny = ymin + (ymax - ymin) * y / ySize;
            for (var x = 0; x < xSize; x++) {
                nx = xmin + (xmax - xmin) * x / xSize;
                    z = new Complex(0, 0);
                    nz = new Complex(nx,ny);
                    i = 0;
                while (i < 255 && z.abs() < 2) {
                    z = nz.add(z.sqr());
                    i++;
                }
                
                var p = (xSize * y + x) * 4;
                pixels[p] = i % mr0 * mr1;
                pixels[p + 1] = i % mg0 * mg1;
                pixels[p + 2] = i % mb0 * mb1;
                pixels[p + 3] = 255;
            }
        }
        context.putImageData(imgData, 0, 0);
    }
    draw();
    interval = setInterval(function(){
        draw();
    }, repeatDelay);
}
function clearFractalInterval() {
    'use strict';
    clearInterval(interval);
}