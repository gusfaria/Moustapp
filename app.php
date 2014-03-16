<html>
<head>
	<title></title>
	<script type="text/javascript" src="js/ccv.js"></script>
	<script type="text/javascript" src="js/face.js"></script>
	<style type="text/css">
		#moustache{
/*			border: 1px red solid; 
*/			position: relative;
			margin-left: -300px;
			z-index: 100;
		}
	</style>
</head>
<body>
	<?php include 'file_upload.php' ?>

	<div id="output_image"></div>

<script type="text/javascript">

	var output_image = document.getElementById('output_image');
	var x = 0, 
		y = 0, 
		w = 0,
		h = 0;

    function detectFaces(src) {
		var canvas = document.createElement("canvas");	
		var ctx = canvas.getContext("2d");
		output_image.appendChild(canvas);

		var image = new Image();

		image.onload = function () {
			console.log('loaded!');
			var compareScale = 2;
		    var elapsed_time = (new Date()).getTime();
		    var comp = ccv.detect_objects({ "canvas" : ccv.grayscale(ccv.pre(image)),
		    								"cascade" : cascade,
		    								"interval" : 5,
		    								"min_neighbors" : 1 });
		    
		    canvas.width = image.width;
		    canvas.height = image.height;

		    ctx.drawImage(image, 0, 0);
		    //debug face...
		 // 	   ctx.lineWidth = 3;
		 // 	   ctx.strokeStyle = "#f00";
			// ctx.strokeRect(comp[0].x, comp[0].y, comp[0].width, comp[0].height);
			console.log(comp[0].x + " " + comp[0].y + " " + comp[0].width + " " + comp[0].height);
			x = comp[0].x + (comp[0].width / 2) - (comp[0].width/2)/2;
			y = comp[0].y + (comp[0].height / 2) + ((comp[0].height /6)/2) + 20;
			w = comp[0].width/2;
			h = comp[0].height /6;

		    console.log('x', x);
		    console.log('y', y);
		    console.log('w', w);
		    console.log('h', h);
		}

		image.src = src;

			//moustache
			var effect = function(){
			var moustachecanvas = document.createElement("canvas");
			moustachecanvas.id = 'moustache';

			moustachecanvas.width = 300;
		    moustachecanvas.height = 300;

			var moustache_ctx  = moustachecanvas.getContext("2d");
			output_image.appendChild(moustachecanvas);

			var moustache = new Image();
			moustache.onload = function(){
				console.log('moustify');
				moustache_ctx.drawImage(moustache,x+2, y, w, h);
			};
			setTimeout(moustache.src = 'moustache.png', 500);

	};
	effect();

	}
	var input_image = document.getElementById('input_image');


	if(input_image.src !== null){
		setTimeout(detectFaces(input_image.src),500);		
	}


</script>

<script type="text/javascript">
    var imageList = [
    <?php
        $dir='images/';
        $files = scandir($dir);
        foreach((array)$files as $file){
        if($file=='.'||$file=='..') continue;
           $fileList[]=$file;
        }
        echo "'".implode("','", $fileList)."'";
    ?>];          

    var myArray = [];
    
    //go through all the files and get only the PNGs
    for(var i=0; i < imageList.length; i++){               
        var ext = imageList[i].substring(imageList[i].lastIndexOf('.') + 1); //get the files extension!!! 
        if(ext == 'png' || ext == 'jpg')
            myArray.push(imageList[i]);
    }
    console.log(myArray);

	setTimeout( function(){
		for(var i = 0; i < myArray.length; i++){
			// console.log('images/'+myArray[i]);
			detectFaces('images/'+myArray[i]);
		}
	},1000);
</script>

</body>
</html>