var App = (function(){
	var app_images = document.getElementById('app_images'),
		input_image = document.getElementById('input_image'),

		viewport = document.createElement('canvas'),
		context = viewport.getContext('2d');

	viewport.id = 'viewport';
	viewport.width = 500;
	viewport.height = 672;

	app_images.appendChild(viewport);

	var imageObj = new Image();
    imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0, 500, 672);
        
        var canvas = document.createElement('canvas');
    	canvas.id = 'photoCanvas';
    	context = canvas.getContext('2d');
    	var photos = document.getElementById('photos');

        var importCanvas = function(c){
        	

        	var newimg = new Image();
        	canvas.width = 500;
        	canvas.height = 672;
        	context.drawImage(c, 0, 0, 500, 672);
        	photos.appendChild(canvas);
        };

        importCanvas(viewport);
        var detectFaces = function(){
			var comp = ccv.detect_objects({ "canvas" : ccv.grayscale(ccv.pre(canvas)),
			 	"cascade" : cascade,
			 	"interval" : 5,
			 	"min_neighbors" : 1 
			});		

			console.log(comp);
		};
		detectFaces();



      };
    imageObj.src = input_image.src;

    // dataURL = viewport.toDataURL();
    // console.log(dataURL);

  
})();



// function detectFaces(src) {

// var canvas = document.createElement("canvas");
// var ctx = canvas.getContext("2d");
// var image = new Image();

// image.onload = function () {
//     var elapsed_time = (new Date()).getTime();
//     var comp = ccv.detect_objects({ "canvas" : ccv.grayscale(ccv.pre(image)),
//     								"cascade" : cascade,
//     								"interval" : 5,
//     								"min_neighbors" : 1 });
//     canvas.width = image.width;
//     canvas.height = image.height;
    
//     ctx.drawImage(image, 0, 0);
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = "#f00";
//     for (var i = 0; i < comp.length; i++)
//     	ctx.strokeRect(comp[i].x, comp[i].y, comp[i].width, comp[i].height);
    	
//    	$("#photos").append(canvas); 
// }

// image.src = src;

// }

// detectFaces('resources/buscemi.jpg');
// detectFaces('resources/jackson.png');

