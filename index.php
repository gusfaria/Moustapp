<html>
<head>
	<title>MOUSTAPP</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/ccv.js"></script>
	<script type="text/javascript" src="js/face.js"></script>


</head>
<body>
	<header>	
		<h1> { Moustapp } </h1>
		<section id="add">
			  <form id="form" action="index.php" method="post" enctype="multipart/form-data" onSubmit="return validate()" >
				<label for="file">File:</label>
				<input placeholder="Insert your name" type="name" />
				<input type="file" name="file" id="file" />
				<input type="submit" name="submit" value="Submit" />
			 </form>
			<p>ADD PICTURE</p>
		</section>
	</header>	
	<div class='display_none'>	<?php include 'file_upload.php' ?> </div>
	<div id="input_image"></div>
	<div id="output_image"></div>
	<footer>
		<a href="www.gusfaria.com">Project by Gustavo Faria </a>
	</footer>
<script type="text/javascript">
function validate(){
 	var filevalue=document.getElementById("file").value;
 
 if(filevalue=="" || filevalue.length<1){
	 alert("Select File.");
	 var file = document.getElementById("file").focus();
	 return false;
   }

 return true;	
}
</script> 
<script type="text/javascript">
    var imageList = [
        <?php
            $dir='images/profile/';
            $files = scandir($dir);
            foreach((array)$files as $file){
            if($file=='.'||$file=='..') continue;
               $fileList[]=$file;
            }
            echo "'".implode("','", $fileList)."'";
        ?>
    ];
</script>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>

