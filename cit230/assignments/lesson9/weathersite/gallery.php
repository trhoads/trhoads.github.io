<? php include '_header.php';?>
<html lang="en-us">
	<head> 
	    <meta charset="UTF-8">
		<meta  name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="image/crab_opt.png" />
		<title>
		
		Weather Gallery
		
		</title>
		<link rel= "stylesheet" type = "text/css" href = "css/normalize.css">
		<link rel= "stylesheet" type = "text/css" href = "css/gallery-main.css">
		<link rel= "stylesheet" type = "text/css" href = "css/gallery-medium.css">
		<link rel= "stylesheet" type = "text/css" href = "css/gallery-large.css">
		<script src = "scripts/hamburger.js"></script>
	</head>
	<body>
	
		<div  class = "myNav">
				<nav>
				<button id="navButton" onclick="toggleNavMenu()"><img  id = "Hamburger" src = "image/Hamburger_icon.svg_opt.png"></button>
					<ul id ="Nav">
						<li><a href="index.html">Home</a></li>
						<li><a href="franklin-7.html">Franklin</a></li>
						<li><a href="#">Greenville</a></li>
						<li><a href="#">Springfield</a></li>
						<li><a href="storm-tracker.html">Storm Center</a></li>
						<li><a href="gallery.html">Gallery</a></li>
					</ul>		
				</nav>
			</div>
	        <div id = "galleryDIV">	
            
		        <div id = "galleryImage1"><img class ="galleryImages"  src = "image/galleryimages/lightning.jpeg"></img><figure><figcaption>Lorem ipsum dolor sit amet, ad expetenda definiebas efficiendi est. </figcaption></figure></div>
				<div id = "galleryImage1"><img class ="galleryImages" id = "galleryImage2" src = "image/galleryimages/hurricane.jpg"></img><figure><figcaption>Lorem ipsum dolor sit amet, ad expetenda definiebas efficiendi est. </figcaption></figure></div>
				<div id = "galleryImage1"><img class ="galleryImages" id = "galleryImage3" src = "image/galleryimages/tornado.jpg"></img><figure><figcaption>Lorem ipsum dolor sit amet, ad expetenda definiebas efficiendi est.</figcaption></figure></div>
				<div><img class ="galleryImages" id = "galleryImage4"  src = "image/galleryimages/forest-fire.jpg"><figure><figcaption>Lorem ipsum dolor sit amet, ad expetenda definiebas efficiendi est.</figcaption></img></figure></div>
				<div><img class ="galleryImages" id = "galleryImage5" src = "image/galleryimages/sharknado.jpg"></img><figure><figcaption>Lorem ipsum dolor sit amet, ad expetenda definiebas efficiendi est.</figcaption></img></figure></div>
				<div><img class ="galleryImages" id = "galleryImage6"  src = "image/galleryimages/mudslide.jpg"></img><figure><figcaption>Lorem ipsum dolor sit amet, ad expetenda definiebas efficiendi est.</figcaption></img></figure></div>
				</div>
		
    </body>

</html>