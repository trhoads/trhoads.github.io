<DOCTYPE! HTML>
<html lang="en-us">
	<head> 
	    <meta charset="UTF-8">
		<meta  name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel = "stylesheet" type ="text/css" href = "styles/nav.css">
		<link rel = "stylesheet" type ="text/css" href = "styles/home.css">
		<link rel = "stylesheet" type ="text/css" href = "styles/normalize.css">
     
        	<title>
		The Mountain Spoke 			
		</title>
		<body>
		<?php include "_nav.php" ?>
			
			<main>
			<div id = "carouselDIV">
			<img id = "left-arrow"class = "arrows" src ="images/left-arrow.png" onclick = "carousel(-1)"> 
			<img id = "right-arrow"class = "arrows"src = "images/right-arrow.png" onclick = "carousel(1)">
			<div id = "image1"class = "carousel"><image  src = "images/one-hand.jpg"><div class= "carouselLabel">
			Take your riding to the next level!
  </div></div>
			
			<div id = "image2" class = "carousel"><image  src = "images/rocks.jpg"></div>
			<div class= "carouselLabel">
			Check out our trails!
  </div></div>
			
			<div id = "image4" class = "carousel"><image src = "images/MB.jpg"></div>
			<div class= "carouselLabel">
			Check out our sales!
  </div>
			<div id = "image5" class = "carousel"><image  src = "images/specialized.jpg"></div>
			<div class= "carouselLabel">
			Check out our trails!
  </div>
			<div id = "image6" class = "carousel"><image src = "images/repair.jpg"></div>
			<div class= "carouselLabel">
			Check out our trails!
  </div>
  
  <div id = "image7" class = "carousel"><image  src = "images/sprocket.jpg"></div>
			<div class= "carouselLabel">
			Check out our trails!
  </div></div>
			
			
			</div>
			</main>
			<?php include "_footer.php" ?>
		</body>
		<script src = "scripts/home.js"></script>
</html>