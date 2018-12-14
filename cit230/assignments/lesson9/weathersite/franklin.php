<!DOCTYPE html>
<html lang="en-us">
	<head> 
	    <meta charset="UTF-8">
		<meta  name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="image/crab_opt.png" />
		<title>
		
		Franklin Weather Page
		
		</title>
		<link rel= "stylesheet" type = "text/css" href = "css/normalize.css">
		<link rel= "stylesheet" type = "text/css" href = "css/franklin.css">
		<link rel= "stylesheet" type = "text/css" href = "css/franklin-medium.css">
		<link rel= "stylesheet" type = "text/css" href = "css/franklin-large.css">
		<script  src = "scripts/franklin.js"></script>
		<script  src = "scripts/windchill.js"></script>
		<script src = "scripts/hamburger.js"></script>
	</head>
	<body onload = "startFranklin()">

  
		
			<div  class = "myNav">
				<nav>
				<button id="navButton" onclick="toggleNavMenu()"><img  id = "Hamburger" src = "image/Hamburger_icon.svg_opt.png"></button>
					<ul id ="Nav">
						<li><a href="index.html">Home</a></li>
						<li><a href="franklin.html">Franklin</a></li>
						<li><a href="greenville.html">Greenville</a></li>
						<li><a href="springfield.html">Springfield</a></li>
						<li><a href="stormcenter.html">Storm Center</a></li>
						<li><a href="gallery.html">Gallery</a></li>
					</ul>		
				</nav>
			</div>
			
			<div id= "slider">
			
			   <img class = "sliderImages"
        srcset="image/large_opt.jpg 1100w,
                image/medium.jpg 800w,
                image/small.jpg 500w"
        sizes="175vw"
        src="image/small.jpg"
        alt="responsive image">
		</div>
			
	        <div id="headerDiv">
			<header>
				<h3 id = "title">Under The Weather Umbrella</h3>
				<p id= "tagline">
                	Tagline to go here
                    <img id = "crab" alt ="crabPic" src="image/crab_.png">
                </p>        
			</header>					
				
				<img id= "headerimage" alt ="umbrella" src= "image/umbrella2.jpg">	
	        </div>
		
	<main>
		<figure>
		
		</figure>
		<section class="weather-summary">
			<h3 id = "cityTitle">Franklin</h3>
      
      
        <strong id = "currentCondition"></strong>
        <picture>
         <img src="" alt="Sunny Symbol" id="weatherIcon">   
        </picture>
	  <div class ="conditions">
	      <p>High: <span id ="hi"></span> &deg;F</p>  
	      <p>Low: <span id ="low"></span> &deg;F</p>  
          <p>Precipitation: 0%</p>  
          <p>Wind Speed: <span  id= "windSpeed"></span> <span>mph</span></p> 
          <p id ="windChill"></p>
      </div>           
    </section>
        
    <section class="forecast">
      <h3>Ten Day Forecast</h3>
      <table>
        <thead>
          <tr>
            <th>Day 1</th>
            <th>Day 2</th>
            <th>Day 3</th>
            <th>Day 4</th>
            <th>Day 5</th>
            <th>Day 6</th>
            <th>Day 7</th>
            <th>Day 8</th>
            <th>Day 9</th>
            <th>Day 10</th>
          </tr>
	</thead>
        <tbody>  
          <tr>
            <td>89&deg;F</td>
            <td>87&deg;F</td>
            <td>78&deg;F</td>
            <td>75&deg;F</td>
            <td>72&deg;F</td>
            <td>72&deg;F</td>
            <td>79&deg;F</td>
            <td>83&deg;F</td>
            <td>85&deg;F</td>
            <td>89&deg;F</td>
          </tr>
	</tbody>
      </table>
    </section>
      
    <article>
	<div class = "t-a">
      <h3 id = "articleTitle">Franklin Breaks Heat Record </h3>
       	  
       <img id = "futurama"
        srcset="image/my3suns.png 1100w,
                image/my3suns_800.png 800w,
                image/my3suns_500.png 500w"
        sizes="175vw"
        src="image/my3suns_300.png"
        alt="Franklin Sun">
	  <p class="town-article">
	  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
	  Vestibulum tortor quam, feugiat vitae, ultricies eget, 
	  tempor sit amet, ante. 
	  Donec eu libero sit 
	  amet quam egestas semper. 
	  Aenean ultricies mi vitae est. 
	  Mauris placerat eleifend leo. 
	  Quisque sit amet est et sapien 
	  ullamcorper pharetra. Vestibulum erat wisi, condimentum 
	  sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget 
	  condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. 
	  Donec non enim in turpis  tincidunt  Nam dui mi, tortor neque egestas 
	  pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, 
	  augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. 
	  tincidunt quis, accumsan porttitor, facilisis luctus, metus
	  
      </p>
	  </div>
    </article>		  
    </main>
	</div>
  <footer>
  
    <section class="contact">
      <h2 id="contactTitle">Umbrella Weather</h2><br>
      999.999.9999 <br>
      123 Main St. Anytown, US 99999 <br>
      Google Map
    </section>
    <section class="footer-bar"><h2>&copy;2018 | All Rights Reserved | Umbrella Weather |</h2> <span id="currentdate"></span>
    
	</section>
	</footer>
</body>
</html>