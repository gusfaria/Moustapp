function validate(){
    var filevalue=document.getElementById("file").value;
 
 if(filevalue=="" || filevalue.length<1){
     alert("Select File.");
     var file = document.getElementById("file").focus();
     return false;
   }

 return true;   
}

var app = app || {};
app = (function(){
    var imgArray = [],
        input = document.getElementById('input_image'),
        output = document.getElementById('output_image'),
        len = imageList.length,
        upload_img = function(){
        for(var i = 0; i < len; i++ ){
            var ext = imageList[i].substring(imageList[i].lastIndexOf('.') + 1);
            if(ext == 'png' || ext == 'jpg' || ext == 'jpeg'){
                imgArray.push(imageList[i]);
                var element_img = document.createElement('img');
                input.appendChild(element_img);
                element_img.className = ('raw_img');
                element_img.src = 'images/profile/' + imageList[i];
            }
        }
    };
    upload_img();

    var x = 0, 
        y = 0, 
        w = 0,
        h = 0;

    var detectFaces = function(src){
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
            output.appendChild(canvas);

        canvas.className = 'img_output';

        var image = new Image();
        image.src = src;
        image.onload = function(){

            var comp = ccv.detect_objects({ "canvas" : ccv.grayscale(ccv.pre(image)),
                                            "cascade" : cascade,
                                            "interval" : 5,
                                            "min_neighbors" : 1 });
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            console.log(4);
            x = comp[0].x + (comp[0].width / 2) - (comp[0].width/2)/2;
            y = comp[0].y + (comp[0].height / 2) + ((comp[0].height /6)/2) + 20;
            w = comp[0].width/2;
            h = comp[0].height /6;
            console.log(5);
        }

        
        this.effect = function(){
            
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
        moustache.src = 'images/moustache.png';
        };
        
        this.effect();

    };

    
    var upload_moustache = function (){
        for( var i = 0; i <= imgArray.length-1; i++ ){
            
            detectFaces('images/profile/'+imgArray[i]);
            
        }    
    };
    upload_moustache();

    return {
        upload_moustache : upload_moustache,
        detectFaces : detectFaces,
        imgArray : imgArray
    }

})();





//THINGS TO DO:
//upload all the images
// detect face
//insert the mustache
//add name to the picture
//store the names on localhost
//change moustache
