/*exported main*/
/*global fractal,lines,curves,transform,images,
videos,clearFractalInterval, stopVideo*/

var canvas,context,video,
	repeatDelay = 3000;

function clear() {
	'use strict';

	clearFractalInterval();
	stopVideo();
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
function drawVideo() {
	'use strict';

	clear();
	videos(canvas, context, video);
}
function drawFractal() {
	'use strict';

	clear();
	fractal(canvas, context, repeatDelay);
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
		case 'video':
			drawVideo();
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
	video = $('#nVideo')[0];

	bindEvents();
}