<html>
 <head>
 	<title>MOUSTIFY</title>
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
 </head>
<body >
	<header>
		<h1>Moustify</h1>
		<h2>Upload your image</h2>
	</header>

  <form action="app.php" method="post" enctype="multipart/form-data" onSubmit="return validate()" >
	    <label for="file">File:</label>
		<input type="file" name="file" id="file" />
		<input type="submit" name="submit" value="Submit" />
 </form>
</body>
</html> 