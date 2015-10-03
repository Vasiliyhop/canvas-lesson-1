/*exported main*/
/*global fractal, lines, curves, transform, images*/

var canvas,context,interval;
function clear() {
	'use strict';

	clearInterval(interval);
	context.clearRect(0, 0, canvas.width, canvas.height);
}
function drawLines() {
	'use strict';

	clear();
	lines(canvas, context);
}
function drawCurves() {
	'use strict';

	clear();
	curves(canvas, context);
}
function drawTransform() {
	'use strict';

	clear();
	transform(canvas, context);
}
function drawImages() {
	'use strict';

	clear();
	images(canvas, context);
}
function drawFractal() {
	'use strict';

	clear();
	interval = setInterval(function(){
		fractal(canvas, context);
	}, 1000);
}
function navigate(targetClass) {
	'use strict';
	switch (targetClass) {
		case 'lines':
			drawLines();
			break;
		case 'curves':
			drawCurves();
			break;
		case 'transform':
			drawTransform();
			break;
		case 'images':
			drawImages();
			break;
		case 'fractal':
			drawFractal();
			break;
		default:
			drawLines();
			break;
	}
}
function bindEvents(){
	'use strict';
	var hash = window.location.hash;

	navigate(hash.replace('#', ''));

	$('.nav a').click(function(e){
		var target = $(e.currentTarget),
			targetClass = target.attr('class');

		navigate(targetClass);
	});
}
function main(){
	'use strict';
	canvas = $('#canvas')[0];
	context = canvas.getContext('2d');

	bindEvents();
}