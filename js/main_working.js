var App = (function(){
	var app_images = document.getElementById('app_images'),
		input_image = document.getElementById('input_image'),
		overlayCtx,
		compareCanvas, 
		compareCtx,
		canvasCleaner;


		viewport = document.createElement('canvas'),
		context = viewport.getContext('2d');

	viewport.id = 'viewport';
	viewport.width = 500;
	viewport.height = 672;

	app_images.appendChild(viewport);

	var imageObj = new Image();
      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0, 500, 672);
        context.drawImage
      };
    imageObj.src = input_image.src;
    

    function detectFaces(src) {

		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		var image = new Image();

		image.onload = function () {
		    var elapsed_time = (new Date()).getTime();
		    var comp = ccv.detect_objects({ "canvas" : ccv.grayscale(ccv.pre(image)),
		    								"cascade" : cascade,
		    								"interval" : 5,
		    								"min_neighbors" : 1 });
		    canvas.width = image.width;
		    canvas.height = image.height;
		    
		    ctx.drawImage(image, 0, 0);
		    ctx.lineWidth = 3;
		    ctx.strokeStyle = "#f00";
		    for (var i = 0; i < comp.length; i++)
		    	ctx.strokeRect(comp[i].x, comp[i].y, comp[i].width, comp[i].height);
		    
		    var photos = document.getElementById('photos');
		    photos.appendChild(canvas);
		}
		image.src = src;
	}

detectFaces('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kPUegM4VO8JVXG4X3HgawsyoFpG8tbv2IO9V1oUp8hxyqreBrw');
// detectFaces('img/obama.jpg');
// detectFaces('img/face.jpg');



})();



